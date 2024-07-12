import path from 'node:path'
import {
	RulesPackageBuilder,
	type SchemaValidator
} from '../../pkg-core/Builders/RulesPackageBuilder.js'
import {
	IdParser,
	type Datasworn,
	type DataswornSource
} from '../../pkg-core/index.js'
import { forEachIdRef } from '../../pkg-core/Validators/Text.js'
import { type RulesPackageConfig } from '../../schema/tools/build/index.js'
import { formatPath } from '../../utils.js'
import {
	DIR_HISTORY_CURRENT,
	ROOT_OUTPUT,
	SCHEMA_NAME,
	SOURCE_SCHEMA_NAME
} from '../const.js'
import * as PkgConfig from '../pkg/pkgConfig.js'
import { loadSchema, loadSourceSchema } from '../schema/loadSchema.js'
import Log from '../utils/Log.js'
import { readSourceData, writeJSON } from '../utils/readWrite.js'
import AJV from '../validation/ajv.js'

const schemaValidator = <SchemaValidator<Datasworn.RulesPackage>>(
	_validate.bind(undefined, SCHEMA_NAME)
)

const sourceSchemaValidator = <SchemaValidator<DataswornSource.RulesPackage>>(
	_validate.bind(undefined, SOURCE_SCHEMA_NAME)
)

await buildRulesPackages(PkgConfig)

export async function buildRulesPackages(
	pkgs: Record<string, RulesPackageConfig>
) {
	const profiler = Log.startTimer()

	Log.info('📖 Reading schema...')

	// prepare schemata for AJV validation
	AJV.removeSchema()

	await loadSourceSchema()
	await loadSchema()

	Log.info('⚙️  Building rules packages...')

	const toBuild: Promise<RulesPackageBuilder>[] = []

	// indexes all package contents by their ID, so we can validate package links after they're built
	const index = new Map<string, unknown>()

	for (const k in pkgs) {
		const pkg = pkgs[k]
		const { type, id } = pkg

		Log.info(`⚙️  Building ${type}: ${id}`)

		toBuild.push(assemblePkgFiles(pkg, index))
	}

	const errors = []

	const toWrite: Promise<any>[] = []

	IdParser.tree = new Map(
		(await Promise.all(toBuild)).map((pkg) => [pkg.id, pkg.build().toJSON()])
	)
	if (IdParser.tree == null) throw new Error('IdParser is null?')

	// console.log(new Set(index.keys()))

	// now that we have all IDs. available, we can validate the built packages

	const visitedIds = new Set<string>()

	for (const [pkgId, pkg] of IdParser.tree)
		try {
			forEachIdRef(pkg, (id) => {
				if (visitedIds.has(id)) return

				try {
					const parsedId = IdParser.parse(id as any)
					const matches = parsedId.getMatches(IdParser.tree)
					if (matches.size === 0) throw new Error('No matches')
					visitedIds.add(id)
				} catch (e) {
					errors.push(`Couldn't reach <${id}> ${String(e)}`)
				}
			})

			const pathsToWriteTo = [
				path.join(ROOT_OUTPUT, pkgId),
				path.join(DIR_HISTORY_CURRENT, pkgId)
			]
			for (const dir of pathsToWriteTo) toWrite.push(_writePkgFiles(dir, pkg))
		} catch (e) {
			errors.push(e)
		}

	if (errors.length > 0) throw new Error(errors.map(String).join('\n'))

	await Promise.all(toWrite)

	profiler.done({
		message: `Finished building ${toBuild.length} rules package(s) in ${Date.now() - profiler.start.valueOf()}ms`
	})
}

/** Loads files for a given Datasworn package configuration and assembles them with RulesPackageBuilder. */
async function assemblePkgFiles(
	{ id, paths }: RulesPackageConfig,
	index: Map<string, unknown>
) {
	const destDir = path.join(ROOT_OUTPUT, id)

	const sourceFiles = getSourceFiles(paths.source)
	const oldJsonFiles = getOldJsonFiles(destDir)
	const oldErrorFiles = getOldErrorFiles(paths.source)

	const srcFileMatches = []

	// flush old error files; hold off on flushing old built files for now, as the build can fail

	// const errorCleanup = oldErrorFiles.map(async (filePath) =>
	// 	fs.unlink(filePath)
	// )

	// Log.info(
	// 	`🔍 Found ${
	// 		sourceFiles.length
	// 	} source files for "${id}" in ${formatPath(paths.source)}`
	// )

	const builder = new RulesPackageBuilder(
		id,
		schemaValidator,
		sourceSchemaValidator,
		Log
	)

	const builderOps: Promise<unknown>[] = []

	// begin loading and adding files
	for await (const filePath of sourceFiles) {
		Log.info(`📖 Reading ${formatPath(filePath)}`)

		try {
			builderOps.push(_loadBuilderFile(filePath, builder))
		} catch (error) {
			Log.error(error)
		}
	}

	await Promise.all(builderOps)

	builder.build()
	for (const [k, v] of builder.index) index.set(k, v)

	return builder
}

async function _loadBuilderFile(
	filePath: string,
	builder: RulesPackageBuilder
) {
	let data = await readSourceData(filePath)
	const isYaml = ['.yaml', '.yml'].includes(path.extname(filePath))

	// yaml parsing creates anchors as references to the same object, but we need to edit them as unique instances.
	if (isYaml)
		// lazy way to deep clone dereferenced values
		data = JSON.parse(JSON.stringify(data))

	return builder.addFiles({
		name: path.relative(process.cwd(), filePath),
		data
	})
}

async function _writePkgFiles(destDir: string, data: Datasworn.RulesPackage) {
	const outPath = path.join(destDir, `${data._id}.json`)

	Log.info(`✏️  Writing to ${formatPath(outPath)}`)

	try {
		await writeJSON(outPath, data)
	} catch (e) {
		Log.error(`Failed to write ${formatPath(outPath)}:`, e)
	}
}

function getSourceFiles(path: string) {
	const glob = new Bun.Glob('**/*.{yaml,yml,json}')
	const files = glob.scan({ cwd: path, absolute: true })
	// if (files?.length === 0)
	// 	throw new Error(`Could not find any source files with the glob "${glob}"`)

	return files
}

function getOldJsonFiles(path: string) {
	const glob = new Bun.Glob('*.json')
	return glob.scan({ cwd: path, absolute: true })
}

function getOldErrorFiles(path: string) {
	const glob = new Bun.Glob('**/*.error.json')
	return glob.scan({ cwd: path, absolute: true })
}

function _validate<T>(schemaId: string, data: unknown): data is T {
	const isValid = AJV.validate(schemaId, data)

	if (!isValid) {
		const shortErrors = AJV.errors?.map(
			({ instancePath, parentSchema, message }) => ({
				parentSchema: parentSchema?.$id ?? parentSchema?.title,
				instancePath,
				message
			})
		)
		throw Error(
			`Failed schema validation. ${JSON.stringify(shortErrors, undefined, '\t')}`
		)
	}

	return true
}
