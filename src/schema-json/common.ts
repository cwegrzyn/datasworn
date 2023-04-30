// import { type JSONSchemaType as Schema } from 'ajv'
import { type JSONSchemaType as Schema } from 'schema-json/clean-types'
import { type PartialSchema } from 'ajv/dist/types/json-schema'
import _ from 'lodash'

/** Pattern for keys used in dictionary objects throughout Dataforged; they double as ID fragments, so they require "snake case" (lower case letters and underscores only) */
export const DICT_KEY = /^[a-z_]+$/.source

export function refSchema<T>(defName: string) {
	// ensures that the schema with the reference behaves
	const schema = { $ref: `#/definitions/${defName}` }
	return schema as Schema<T> & { $ref: string }
}

type DictionaryOptions<TValue> = Omit<
	PartialSchema<Record<string, TValue>>,
	'type' | '$comment' | 'patternProperties'
>

/**
 * Creates a schema for a dictionary-like object.
 * @param schema - Schema for individual dictionary options.
 * @param options - Additional properties for the dictionary's schema.
 */
export function dictionarySchema<TValue>(
	schema: Schema<TValue>,
	options?: DictionaryOptions<TValue>
): Schema<Record<string, TValue>> {
	const dictionarySchema = _.merge(
		{
			type: 'object',
			$comment: 'Deserialize as a "dictionary"-like object.',

			patternProperties: {
				[DICT_KEY]: schema
			},
			additionalProperties: false
		},
		options ?? {}
	)
	return dictionarySchema as Schema<Record<string, TValue>> &
		typeof dictionarySchema
}
