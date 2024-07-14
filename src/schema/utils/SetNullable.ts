import {
	CloneType,
	type ObjectOptions,
	type Static,
	type TObject
} from '@sinclair/typebox'
import { Nullable, type TNullable } from './Nullable.js'
import type { ObjectProperties } from './ObjectProperties.js'

export function SetNullable<T extends TObject, K extends Array<keyof Static<T>>>(
		schema: T,
		keys: [...K],
		{
			defaultToNull = false,
			...options
		}: ObjectOptions & { defaultToNull?: boolean } = {}
	) {
		// @ts-expect-error
		const base = CloneType(schema, options) as TSetNullable<T, K>

		const nullableOptions: ObjectOptions = {}

		if (defaultToNull) nullableOptions.default = null

		for (const key of keys as Array<keyof T['properties']>) {
			if (!(key in base.properties)) continue
			// @ts-expect-error
			base.properties[key] = Nullable(base.properties[key], nullableOptions)
		}

		return base
	}

export type TSetNullable<
	T extends TObject,
	K extends Array<keyof Static<T>>
> = TObject<
	Omit<ObjectProperties<T>, K[number]> & {
		[P in K[number]]: TNullable<ObjectProperties<T>[P]>
	}
>
