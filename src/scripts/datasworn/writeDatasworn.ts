import * as pkgs from '../pkg/pkgConfig.js'
import fs from 'fs-extra'
import { forEach } from 'lodash-es'
import Log from '../utils/Log.js'
import ajv from '../validation/ajv.js'
import { buildRuleset } from './buildDatasworn.js'
import { SCHEMA_IN, SCHEMA_OUT } from '../const.js'
import { formatPath } from '../../utils.js'

const profiler = Log.startTimer()

Log.info('📖 Reading schema...')

// flush any old schemas
ajv.removeSchema()

const schemaInId = 'DataswornSource'
const schemaOutId = 'Datasworn'

const schemas = new Map([
	[schemaInId, SCHEMA_IN],
	[schemaOutId, SCHEMA_OUT]
])

for await (const [id, filePath] of schemas) {
	const v = await fs.readJSON(filePath)
	await ajv.validateSchema(v, true)
	ajv.addSchema(v, id)
	Log.info(`✅ Loaded ${id} schema from ${formatPath(filePath)}`)
}

// TODO: invert the logic for this so that it infers from directory structure
Log.info('⚙️  Building sourcebooks...')

await Promise.all(
	Object.values(pkgs).map((pkg) =>
		buildRuleset(pkg, schemaInId, schemaOutId).catch((e) =>
			Log.error(`Failed to build package "${pkg.id}":`, e)
		)
	)
)

profiler.done({ message: `Finished in ${Date.now() - profiler.start}ms` })
