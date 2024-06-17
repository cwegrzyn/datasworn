import {
	Type,
	type ObjectOptions,
	type TObject,
	type TString
} from '@sinclair/typebox'
import type TypeId from '../../pkg-core/IdElements/TypeId.js'
import { pascalCase } from '../utils/string.js'
import { IdNode } from './IdNode.js'

export function EmbedOnlyNode<
	TBase extends TObject,
	TType extends TypeId.EmbedOnlyType,
	TParentType extends TypeId.CanEmbedType<TType>
>(
	base: TBase,
	typeId: TType,
	parentType: TParentType,
	options: ObjectOptions = {}
) {
	const $id = pascalCase(parentType) + pascalCase(typeId)
	const idSchemaName = $id + 'Id'
	return IdNode(base, Type.Ref<TString>(idSchemaName), { $id, ...options })
}
