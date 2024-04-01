import { Type, type Static, type TUnsafe } from '@sinclair/typebox'
import * as Generic from './Generic.js'
import { type TAssetAbility } from './assets/Ability.js'
import {
	type TAssetControlField,
	type TAssetOptionField
} from './assets/Fields.js'
import { AssetPropertiesEnhanceable } from './assets/common.js'
import { Id, Localize, Metadata } from './common/index.js'
import * as Utils from './utils/Assign.js'

const AssetMixin = Type.Object({
	category: Type.Ref(Localize.Label, {
		description:
			"A localized category label for this asset. This is the surtitle above the asset's name on the card.",
		examples: [
			'Combat Talent',
			'Command Vehicle',
			'Companion',
			'Deed',
			'Module',
			'Path',
			'Ritual',
			'Support Vehicle'
		]
	}),
	icon: Type.Optional(
		Type.Ref(Metadata.SvgImageUrl, { description: "This asset's icon." })
	),
	color: Type.Optional(
		Type.Ref(Metadata.CssColor, {
			description: 'A thematic color associated with this asset.'
		})
	),
	options: Type.Optional(
		Generic.Dictionary(Type.Ref<TAssetOptionField>('AssetOptionField'), {
			description:
				"Options are input fields set when the player purchases the asset. They're likely to remain the same through the life of the asset. Typically, they are rendered at the top of the asset card."
		})
	),
	requirement: Type.Optional(
		Type.Ref(Localize.MarkdownString, {
			description: 'Describes prerequisites for purchasing or using this asset.'
		})
	),
	abilities: Type.Array(
		Type.Ref<TAssetAbility>('AssetAbility', {
			description: 'Abilities provided by this asset. Most assets have 3.'
		})
	)
})

export const Asset = Generic.Collectable(
	Type.Ref(Id.AssetId),
	'asset',
	Utils.Assign([
		AssetMixin,
		AssetPropertiesEnhanceable(
			Type.Ref<TAssetControlField>('AssetControlField')
		)
	]),
	{ $id: 'Asset' }
)
export type TAsset = typeof Asset
export type Asset = Generic.Collectable<
	Static<typeof AssetMixin> &
		Static<ReturnType<typeof AssetPropertiesEnhanceable<TAssetControlField>>>
>

export const AssetCollection = Generic.Collection(
	Type.Ref(Id.AssetCollectionId),
	'asset_collection',
	Type.Ref<TUnsafe<Asset>>('Asset'),
	{},
	{
		$id: 'AssetCollection'
	}
)
export type TAssetCollection = typeof AssetCollection
export type AssetCollection = Generic.Collection<Asset>

export * from './assets/Ability.js'
export * from './assets/Enhancement.js'
export * from './assets/Fields.js'
