import fastGlob from 'fast-glob'
import fs from 'fs-extra'
import JsonPointer from 'json-pointer'
import { type JSONSchema7 } from 'json-schema'
import { isUndefined, merge, omit, pick } from 'lodash-es'
import path from 'path'
import { Datasworn as DataswornBuilder } from '../../builders/datasworn.js'
import { transform } from '../../builders/transformer.js'
import { type SourcedNode } from '../../schema/datasworn/Utils.js'
import { type DataPackageConfig } from '../../schema/tools/build/index.js'
import type { In, Out } from '../../types/index.js'
import { formatPath } from '../../utils.js'
import { ROOT_OUTPUT } from '../const.js'
import Log from '../utils/Log.js'
import ajv from '../validation/ajv.js'
import * as jsc from '../validation/jsc.js'
import { readSource, writeJSON } from './readWrite.js'
import {
	isSortableObjectSchema,
	sortDataswornKeys,
	unsortableKeys
} from './sort.js'
import { sortTopLevelCollection } from './sortCollection.js'
import SourceValidator from '../validation/SourceValidator.js'

const metadataKeys = ['source', 'id'] as const
const isMacroKey = (key: string) => key.startsWith('_')

/** Builds all YAML files for a given package configuration */
export async function buildRuleset(
	{ id, paths, pkg }: DataPackageConfig,
	schemaIdIn: string,
	schemaIdOut: string
) {
	Log.info(`⚙️  Building ruleset: ${id}`)
	const sourcebook: Record<string, Record<string, unknown>> = {}

	const destDir = path.join(ROOT_OUTPUT, id)

	const sourceFilesGlob = `${paths.source}/**/*.yaml`
	const oldJsonFilesGlob = `${destDir}/*.json`

	const [sourceFiles, oldJsonFiles] = await Promise.all([
		fastGlob(sourceFilesGlob),
		fastGlob(oldJsonFilesGlob)
	])

	Log.info(
		`🔍 Found ${
			sourceFiles?.length ?? 0
		} YAML files for "${id}" in ${formatPath(paths.source)}`
	)

	if (sourceFiles?.length === 0)
		throw new Error(
			`Could not find any YAML files with the glob ${sourceFilesGlob}`
		)

	// flush old files from outdir
	const cleanup = Promise.all(
		oldJsonFiles.map(async (filePath) => {
			await fs.unlink(filePath)
		})
	)

	const builtFiles = new Map<string, Out.Datasworn>()

	await Promise.all(
		sourceFiles.map(async (filePath) => {
			try {
				const sourceData = await readSourcebookFile(filePath, schemaIdIn)

				const builtData = await buildSourcebookFile(
					filePath,
					sourceData,
					schemaIdOut
				)

				builtFiles.set(filePath, builtData)
			} catch (error) {
				Log.error(`Failed to build from ${formatPath(filePath)}:`, error)
			}
		})
	)

	Array.from(builtFiles.entries())
		// sort by file name so that they merge in the same order every time (prevents JSON diff noise). the order itself is arbitrary, but must be the same no matter who runs it.
		.sort(([a], [b]) => a.localeCompare(b, 'en-US'))
		.forEach(([_, data]) => merge(sourcebook, data))

	const sourcebookMetadata = omit(
		pick(sourcebook, metadataKeys),
		'source.page'
	) as unknown as SourcebookMetadata

	const toWrite: Array<Promise<void>> = []

	for (const [k, v] of Object.entries(sourcebook)) {
		if (isMacroKey(k)) continue
		if (metadataKeys.includes(k as any)) continue
		if (v == null || Object.keys(v)?.length === 0) continue

		const jsonToValidate = { ...sourcebookMetadata, [k]: v }

		// TODO: rewrite this using keywords and Draft.each() from json-schema-library

		ajv.validate('Datasworn', jsonToValidate)
		SourceValidator.Check(jsonToValidate)

		const jsonOut = cleanDatasworn({ ...sourcebookMetadata, [k]: v })

		/** JSON transformer to strip underscore (macro) properties */
		const replacer = (k: string, v: unknown) => (isMacroKey(k) ? undefined : v)

		const outPath = path.join(destDir, `${k}.json`)

		toWrite.push(
			fs
				.ensureFile(outPath)
				.then(async () => {
					Log.info(`✏️  Writing to ${formatPath(outPath)}`)
					await writeJSON(outPath, jsonOut, { replacer })
				})
				.catch(
					(err) =>
						void Log.error(`Failed to write ${formatPath(outPath)}:`, err)
				)
		)
	}

	if (oldJsonFiles?.length > 0)
		Log.info(
			`🧹 Deleting ${oldJsonFiles?.length} old JSON files from ${formatPath(
				destDir
			)}`
		)

	await cleanup

	await Promise.all(toWrite)

	Log.info(`✅ Finished writing sourcebook "${id}" to ${formatPath(destDir)}`)
}

function cleanDatasworn(datasworn: Out.Datasworn) {
	// const jsonToValidate = { ...sourcebookMetadata, [k]: v }

	// TODO: rewrite this using keywords and Draft.each() from json-schema-library

	// ajv.validate('Datasworn', jsonToValidate)

	const pointersToDelete: string[] = []
	const sortedPointers: Record<string, unknown> = {}

	// sort non-dictionary objects
	jsc.input.each(datasworn, (schema, value, hashPointer) => {
		const sep = '/'

		const nicePointer = hashPointer.replace(/^#\//, sep)

		const key = nicePointer.split(sep).pop() as string

		pointersToDelete.push(
			...getDeletableKeys(value, schema).map((k) => [nicePointer, k].join(sep))
		)

		if (nicePointer === sep) return

		if (
			value != null &&
			!unsortableKeys.includes(key) &&
			isSortableObjectSchema(schema)
		)
			sortedPointers[nicePointer] = sortDataswornKeys(value as any)
	})

	// sort collections
	for (const [k, v] of Object.entries(datasworn)) {
		// if (metadataKeys.includes(k as any)) continue
		// if (k === 'rules') continue
		if (typeof v !== 'object') continue

		// Log.info(`iterating key: ${k}`)

		const result = sortTopLevelCollection(v as any)

		console.log(result)

		datasworn[k] = result
	}

	// console.log('pointersToDelete', pointersToDelete)
	// console.log('pointersToSort', pointersToSort)

	const jsonOut = JSON.parse(JSON.stringify(datasworn))

	for (const pointer of pointersToDelete)
		if (JsonPointer.has(jsonOut, pointer)) JsonPointer.remove(jsonOut, pointer)

	for (const [pointer, sortedValue] of Object.entries(sortedPointers))
		if (JsonPointer.has(jsonOut, pointer))
			JsonPointer.set(jsonOut, pointer, sortedValue)

	return jsonOut as Out.Datasworn
}

/** Builds from the contents of a single YAML or JSON file */
async function buildSourcebookFile(
	filePath: string,
	sourceData: In.Datasworn,
	schemaIdOut: string
) {
	const transformer = DataswornBuilder

	const builtData = transform<In.Datasworn, Out.Datasworn>(
		sourceData,
		sourceData.id as string,
		sourceData as In.Datasworn & SourcedNode,
		transformer as any
	)
	try {
		if (!ajv.validate<Out.Datasworn>(schemaIdOut, builtData)) {
			Log.error(`${JSON.stringify(ajv.errors, undefined, '\t')}`)

			const errorPath = path.join(
				ROOT_OUTPUT,
				path.dirname(filePath),
				path.basename(filePath, '.yaml') + `.error.json`
			)

			await fs.writeJSON(errorPath, builtData, { spaces: '\t' })
			throw new Error(
				`Transformed data doesn't match the ${schemaIdOut} schema. Dumping invalid JSON to: ${errorPath}`
			)
		}
		return builtData
	} catch (err) {
		Log.error(`Failed to build ${formatPath(filePath)}`, err)
	}
}

type SourcebookMetadataKeys = (typeof metadataKeys)[number]

type SourcebookMetadata = Pick<Out.Datasworn, SourcebookMetadataKeys>
type SourcebookDataKey = Exclude<keyof Out.Datasworn, SourcebookMetadataKeys>
type SourcebookData<T extends SourcebookDataKey = SourcebookDataKey> =
	Out.Datasworn[T]

async function readSourcebookFile(filePath: string, schemaIdIn: string) {
	Log.info(`📖 Reading ${formatPath(filePath)}`)

	const sourceData = await readSource(filePath)

	if (!ajv.validate<In.Datasworn>(schemaIdIn, sourceData)) {
		const shortErrors = ajv.errors?.map(
			({ instancePath, schemaPath, data, parentSchema }) => ({
				instancePath,
				schemaPath,
				parentSchema,
				data
			})
		)
		Log.error(`${JSON.stringify(shortErrors, undefined, '\t')}`)
		throw new Error(
			`YAML data in ${filePath} doesn't match the ${schemaIdIn} schema`
		)
	}
	return sourceData
}

function getDeletableKeys(value: unknown, schema: JSONSchema7): string[] {
	if (!isUndefined(schema.properties) && value != null) {
		return Object.keys(value).filter(
			(k) => !Object.keys(schema.properties as any).includes(k)
		)
	}
	return []
}
