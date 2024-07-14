/**
 * Type guards for individual elements of Datasworn IDs.
 * @module
 */

import Pattern from './Pattern.js'
import { WildcardString, GlobstarString } from './CONST.js'
import type * as Id from '../StringId.js'
import type { DictKey } from '../Datasworn.js'
import TypeId from './TypeId.js'

namespace TypeGuard {
	export function IndexKey(value: string): value is `${number}` {
		const integer = Number.parseInt(value, 10)

		return Number.isInteger(integer) && integer >= 0
	}

	export function DictKey(value: unknown): value is DictKey {
		return typeof value === 'string' && Pattern.DictKey.test(value)
	}

	export function RulesPackageId(value: unknown): value is Id.RulesPackageId {
		return typeof value === 'string' && Pattern.RulesPackageId.test(value)
	}

	export function Wildcard(value: unknown): value is WildcardString {
		return value === WildcardString
	}

	export function Globstar(value: unknown): value is GlobstarString {
		return value === GlobstarString
	}

	export function AnyWildcard(
		value: unknown
	): value is WildcardString | GlobstarString {
		return Wildcard(value) || Globstar(value)
	}

	export function Recursive(
		value: unknown
	): value is TypeId.Collection | TypeId.Collectable {
		return CollectionType(value) || CollectableType(value)
	}

	export function CollectionType(value: unknown): value is TypeId.Collection {
		return TypeId.Collection.includes(value as TypeId.Collection)
	}

	export function NonCollectableType(
		value: unknown
	): value is TypeId.NonCollectable {
		return TypeId.NonCollectable.includes(value as TypeId.NonCollectable)
	}

	export function CollectableType(value: unknown): value is TypeId.Collectable {
		return TypeId.Collectable.includes(value as TypeId.Collectable)
	}

	export function EmbedOnlyType(value: unknown): value is TypeId.EmbedOnly {
		return TypeId.EmbedOnly.includes(value as TypeId.EmbedOnly)
	}

	export function EmbeddablePrimaryType(
		value: unknown
	): value is TypeId.EmbeddablePrimary {
		return TypeId.EmbeddablePrimary.includes(value as TypeId.EmbeddablePrimary)
	}

	export function PrimaryType(
		value: unknown
	): value is TypeId.NonCollectable | TypeId.Collectable | TypeId.Collection {
		return (
			NonCollectableType(value) ||
			CollectableType(value) ||
			CollectionType(value)
		)
	}
}

export default TypeGuard
