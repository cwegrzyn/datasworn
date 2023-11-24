/** Utilities for manipulating TypeBox schemas. */
import {
	Type,
	TypeClone,
	TypeGuard,
	type ObjectOptions,
	type SchemaOptions,
	type Static,
	type TInteger,
	type TLiteral,
	type TLiteralValue,
	type TNull,
	type TNumber,
	/** Transform an object of literal values into a schema representing the object. */
	type TObject,
	type TOmit,
	type TOptional,
	type TPartial,
	type TPick,
	type TProperties,
	type TRef,
	type TSchema,
	type TString,
	type TUnion
} from '@sinclair/typebox'
import { isEmpty, mapValues, omit } from 'lodash-es'
import type * as TypeFest from 'type-fest'
import { JsonTypeDef } from '../../../json-typedef/symbol.js'
import { type TJsonEnum } from '../../../typebox/enum.js'
import { type TDiscriminatedUnion } from '../../../typebox/discriminated-union.js'

/** Transform an object of literal values into a schema representing the object. */

export function ObjectLiterals<T extends Record<string, TLiteralValue>>(
	object: T
) {
	return Type.Object(mapValues(object, (v) => Type.Literal(v)))
}
/** Extracts all properties that can be rendered as Type.Literal with typebox */
export type CanBeLiteral<T> = {
	[K in keyof T as Required<T>[K] extends TLiteralValue | null | undefined
		? K
		: never]: Exclude<T[K], null | undefined>
}

export type Merge<TTarget, TSource> = Omit<TTarget, keyof TSource> & TSource

export type TMerge<TTarget extends TObject, TSource extends TObject> = TObject<
	Merge<TTarget['properties'], TSource['properties']>
>

export const isNullable = Symbol('isNullable')

export type TNullable<T extends TSchema = TSchema> = TUnion<[T, TNull]> & {
	[isNullable]: 'Nullable'
}
/**
 * Also sets options.default to null. Set it to something else if you don't want that.
 */
export function Nullable<T extends TSchema>(
	schema: T,
	options: SchemaOptions = {}
) {
	const newSchema = Type.Union([schema, Type.Null()], {
		default: null,
		...options
	}) as TNullable<T>
	newSchema[isNullable] = 'Nullable'

	return newSchema
}
/** Typeguard */

export function TNullable(schema: unknown): schema is TNullable {
	return (schema as TNullable)[isNullable] === 'Nullable'
}

export function NonNullable<T extends TNullable>(base: T) {
	const [schema] = base.anyOf
	return schema
}

export type ExtractKeysOfValueType<ObjectType, ValueType> = {
	[P in keyof ObjectType]: ObjectType[P] extends ValueType ? P : never
}[keyof ObjectType]

export type PickByType<ObjectType, ValueType> = {
	[P in keyof ObjectType as ExtractKeysOfValueType<
		ObjectType,
		ValueType
	>]: ObjectType[P]
}

export type DeepPartial<T extends Record<any, any>> = {
	[K in keyof T]?: T[K] extends Record<any, any> ? DeepPartial<T[K]> : T[K]
}
// Specialized TObject type that can be passed to TIntersect

export interface TDeepPartial<T extends TObject> extends TObject {
	static: DeepPartial<Static<T>>
}

export function DeepPartial<T extends TObject>(
	schema: T,
	options: ObjectOptions = {}
): TDeepPartial<T> {
	const properties = Object.keys(schema.properties).reduce((acc, key) => {
		const property = schema.properties[key]
		const mapped = TypeGuard.TObject(property)
			? DeepPartial(property)
			: property
		return { ...acc, [key]: Type.Optional(mapped) }
	}, {}) as TDeepPartial<T>['properties']
	return Type.Object(properties, options) as TDeepPartial<T> // required
}

export type SetOptional<
	BaseType,
	Keys extends keyof BaseType
> = TypeFest.SetOptional<BaseType, Keys>

export type TSetOptional<T extends TObject, K extends keyof Static<T>> = TMerge<
	TOmit<T, K>,
	TPartial<TPick<T, K>>
>
/** Make the provided keys optional */
export function SetOptional<
	T extends TObject,
	K extends Array<keyof Static<T>>
>(schema: T, optionalKeys: [...K], options: ObjectOptions = {}) {
	const base = omit(TypeClone.Type(schema), ['$id']) as T

	const toRemove: string[] = []

	for (const k of optionalKeys as string[]) {
		if (base.properties[k] == null) continue
		if (TypeGuard.TOptional(base.properties[k])) continue
		base.properties[k] = Type.Optional(base.properties[k])
		toRemove.push(k)
	}

	if (Array.isArray(base.required))
		base.required = base.required.filter((k) => toRemove.includes(k))

	return Type.Object(base.properties, {
		...omit(base, ['properties']),
		...options
	})

	// const schemaKeys = Object.keys(schema.properties ?? {})

	// if (!optionalKeys.some((key) => schemaKeys.includes(key as any)))
	// 	return TypeClone.Type(schema, options)

	// const result = Type.Composite(
	// 	[
	// 		Type.Omit(schema, optionalKeys),
	// 		Type.Partial(Type.Pick(schema, optionalKeys))
	// 	],
	// 	options
	// ) as unknown as TSetOptional<T, K[number]>

	// return result
}

export function keysWithDefaults<T extends TObject>(schema: T) {
	const keys: string[] = []

	for (const [key, subschema] of Object.entries(schema.properties)) {
		// skip if it's already optional
		if (TypeGuard.TOptional(subschema)) continue
		if (typeof subschema.default === 'undefined') continue
		keys.push(key)
	}

	return keys as Array<keyof Static<T>>
}

export function NoDefaults<T extends TObject>(
	schema: T,
	options: ObjectOptions = {}
) {
	const newSchema = TypeClone.Type(schema, options)
	for (const key in newSchema.properties)
		delete newSchema.properties[key]?.default

	return newSchema
}

export function WithDefaults<T extends TObject>(
	schema: T,
	defaults: Partial<Static<T>>,
	options: ObjectOptions = {}
) {
	const newSchema = TypeClone.Type(schema, options)

	for (const key in defaults) {
		newSchema.properties[key] ||= {} as any
		newSchema.properties[key].default = defaults[key]
	}

	return newSchema
}
/** Resolves to `{const: 0}` in JSON schema, and falls back to uint8 for JSON TypeDef */

export const LiteralZero = Type.Literal(0, {
	default: 0,
	[JsonTypeDef]: { schema: { type: 'uint8' } }
})
export type LiteralZero = 0
/**
 * A schema that resolves to a given type.
 * @template T - The static type of the schema.
 */

export type TSchemaOf<T> = TSchema & { static: T }
/**
 * A schema that resolves to a type, which may be optional or nullable.
 * @template T - The static type of the schema.
 */

export type TFuzzySchemaOf<T> =
	| TSchemaOf<T>
	| (TSchema & { static: T | undefined })
	| (TSchema & { static: T | null })
/**
 * Assigns descriptions to the properties of an object schema.
 * @param schema - The object schema.
 * @param descriptions - The descriptions to be set on each property.
 * @param override - Should non-empty descriptions be overwritten? (default: true)
 * @returns The mutated object schema.
 */

export function setDescriptions<T extends TObject>(
	schema: T,
	descriptions: Partial<Record<keyof T['properties'], string | undefined>>,
	override = true
) {
	for (const [property, description] of Object.entries(descriptions)) {
		if (!override && !isEmpty(schema.properties[property].description)) continue
		schema.properties[property].description = description
	}

	return schema
}
export type TFuzzyRef<T extends TSchema> = T | TRef<T>

export type TFuzzyString = TFuzzyRef<
	TString | TLiteral<string> | TJsonEnum<string[]>
>
export type TFuzzyObject<Props extends TProperties = TProperties> = TFuzzyRef<
	TObject<Props> | (TDiscriminatedUnion & { static: Static<TObject<Props>> })
>
export type TFuzzyNumber = TFuzzyRef<
	TNumber | TInteger | TLiteral<number> | TJsonEnum<number[]>
>
export type TFuzzyOptional<T extends TSchema> = T | TOptional<T>

export type TFuzzyNull<T extends TSchema> = TFuzzyRef<T> | TNullable<T> | TNull

