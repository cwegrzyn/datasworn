import * as JTD from 'jtd'
import Log from '../utils/Log.js'
import { refTracker, toJtdRoot } from './utils.js'

import { DataswornSchema } from '../../schema/index.js'
import { isEmpty } from 'lodash-es'
import { buildTypeDefs } from './buildTypeDefs.js'
import { JTD_JSON_PATH } from './const.js'
import { log } from 'console'
import { writeJSON } from '../utils/readWrite.js'

const root: JTD.Schema = toJtdRoot(DataswornSchema)

for (const name of refTracker)
	if (!(name in root?.definitions ?? {}))
		Log.error(`Missing definition for ${name}`)

const json = JSON.stringify(
	root,
	(k, v) => {
		if (isEmpty(v) && k !== 'properties') return undefined
		return v
	},
	'\t'
)
const filePath = JTD_JSON_PATH

Bun.write(Bun.file(filePath), json).then(() => {
	if (!JTD.isValidSchema(JSON.parse(json)))
		Log.error(`Wrote to ${filePath}, but it\'s not a valid JSON Typedef schema`)
})

await buildTypeDefs()
