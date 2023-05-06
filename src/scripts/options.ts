import { Schema } from 'schema'
import { type JSONSchema7 } from 'json-schema'
import * as Paths from './paths'

interface SchemaOptions {
	name: string
	schema: JSONSchema7
	path: string
	messages: {
		start: string
		finish: string
	}
}

const schemaOptions: SchemaOptions[] = [
	{
		name: 'Dataforged',
		schema: Schema.Dataforged,
		path: Paths.DF_SCHEMA_OUT,
		messages: {
			start: 'Writing Starforged-compatible schema for Dataforged',
			finish: 'Finished writing schema for Dataforged'
		}
	},
	{
		name: 'DataforgedInput',
		schema: Schema.DataforgedInput,
		path: Paths.DF_SCHEMA_IN,
		messages: {
			start: 'Writing Starforged-compatible schema for Dataforged YAML input',
			finish: 'Finished writing schema for Dataforged YAML input'
		}
	},
	{
		name: 'Datasworn',
		schema: Schema.Datasworn,
		path: Paths.DS_SCHEMA_OUT,
		messages: {
			start: 'Writing Ironsworn-compatible schema for Datasworn',
			finish: 'Finished writing schema for Datasworn'
		}
	},
	{
		name: 'DataswornInput',
		schema: Schema.DataswornInput,
		path: Paths.DS_SCHEMA_IN,
		messages: {
			start: 'Writing Ironsworn-compatible schema for Datasworn YAML input',
			finish: 'Finished writing schema for Datasworn YAML input'
		}
	}
]

export { schemaOptions }
