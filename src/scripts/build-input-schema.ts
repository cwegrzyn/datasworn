/**
 * Regenerates schema for YAML input and writes it to file
 */

import { writeFileSync } from 'fs'
import schema from '../schema-ts'

const out = './src/data/schema.json'

const json = JSON.stringify(schema,undefined,2)

writeFileSync(out,json)