import {
	type TUnion,
	type Static,
	type TRef,
	type TString
} from '@sinclair/typebox'
import { type Opaque } from 'type-fest'
import {
	CollectionId,
	DiceRange,
	Extend,
	Id,
	type IdElement,
	IdUnion,
	Index,
	Node,
	Pkg,
	RecursiveCollectableId,
	RecursiveCollectionId,
	UncollectableId,
	toWildcard
} from '../utils/regex.js'

export const RulesetId = Id([Pkg], {
	$id: 'RulesetId',
	examples: ['classic', 'starforged', 'sundered_isles'],
	description:
		'The ID of standalone Datasworn package that describes its own ruleset.'
})
export type RulesetId = Static<typeof RulesetId>

export const ExpansionId = Id([Pkg], {
	$id: 'ExpansionId',
	examples: ['delve'],
	description:
		'The ID of a Datasworn package that relies on an external package to provide its ruleset.'
})
export type ExpansionId = Static<typeof ExpansionId>

export const DictKey = Id([Node], {
	$id: 'DictKey',
	description: 'A `snake_case` key used in a Datasworn dictionary object.',
	remarks:
		"If you need to generate a key from a user-provided label, it's recommended to use a 'slugify' function/library, e.g. https://www.npmjs.com/package/slugify for NodeJS."
})
export type DictKey = Static<typeof DictKey>

export const NpcCollectionId = CollectionId(['npcs'], {
	$id: 'NpcCollectionId',
	examples: [
		'classic/collections/npcs/firstborn',
		'starforged/collections/npcs/sample_npcs'
	]
})

export type NpcCollectionId = Opaque<Static<typeof NpcCollectionId>>

export const NpcCollectionIdWildcard = toWildcard(NpcCollectionId, {
	$id: 'NpcCollectionIdWildcard'
})
export type NpcCollectionIdWildcard = Static<typeof NpcCollectionIdWildcard>

export const NpcId = Extend(NpcCollectionId, [Node], {
	$id: 'NpcId',
	examples: ['classic/npcs/firstborn/elf', 'starforged/npcs/sample_npcs/chiton']
})

export type NpcId = Opaque<Static<typeof NpcId>>

export const NpcIdWildcard = toWildcard(NpcId, {
	$id: 'NpcIdWildcard'
})
export type NpcIdWildcard = Opaque<Static<typeof NpcIdWildcard>>

export const NpcVariantId = Extend(NpcId, ['variants', Node], {
	$id: 'NpcVariantId',
	examples: ['starforged/npcs/sample_npcs/chiton/variants/chiton_drone_pack']
})

export type NpcVariantId = Opaque<Static<typeof NpcVariantId>>

export const AssetCollectionId = CollectionId(['assets'], {
	$id: 'AssetCollectionId'
})
export type AssetCollectionId = Opaque<Static<typeof AssetCollectionId>>

export const AssetCollectionIdWildcard = toWildcard(AssetCollectionId, {
	$id: 'AssetCollectionIdWildcard'
})
export type AssetCollectionIdWildcard = Static<typeof AssetCollectionIdWildcard>

export const AssetId = Extend(AssetCollectionId, [Node], {
	$id: 'AssetId'
})
export type AssetId = Opaque<Static<typeof AssetId>>

export const AssetIdWildcard = toWildcard(AssetId, {
	$id: 'AssetIdWildcard'
})
export type AssetIdWildcard = Opaque<Static<typeof AssetIdWildcard>>

// export const AssetOptionFieldId = Extend(AssetId, ['options', Node], {
// 	$id: 'AssetOptionFieldId'
// })
// export type AssetOptionFieldId = Opaque<Static<typeof AssetOptionFieldId>>

// export const AssetOptionFieldIdWildcard = toWildcard(AssetOptionFieldId, {
// 	$id: 'AssetOptionFieldIdWildcard'
// })
// export type AssetOptionFieldIdWildcard = Static<
// 	typeof AssetOptionFieldIdWildcard
// >

// export const AssetControlFieldId = Extend(AssetId, ['controls', Node], {
// 	$id: 'AssetControlFieldId'
// })
// export type AssetControlFieldId = Opaque<Static<typeof AssetControlFieldId>>

// export const AssetControlFieldIdWildcard = toWildcard(AssetControlFieldId, {
// 	$id: 'AssetControlFieldIdWildcard'
// })
// export type AssetControlFieldIdWildcard = Static<
// 	typeof AssetControlFieldIdWildcard
// >

// export const AssetConditionMeterControlFieldId = Extend(
// 	AssetControlFieldId,
// 	['controls', Node],
// 	{ $id: 'AssetConditionMeterControlFieldId' }
// )
// export type AssetConditionMeterControlFieldId = Static<
// 	typeof AssetConditionMeterControlFieldId
// >

export const AssetAbilityId = Extend(AssetId, ['abilities', Index], {
	$id: 'AssetAbilityId'
})
export type AssetAbilityId = Opaque<Static<typeof AssetAbilityId>>

// export const AssetAbilityOptionFieldId = Extend(AssetAbilityId, ['options', Node], {
// 	$id: 'AssetAbilityOptionFieldId'
// })
// export type AssetAbilityOptionFieldId = Opaque<
// 	Static<typeof AssetAbilityOptionFieldId>
// >

// export const AssetAbilityControlFieldId = Extend(AssetAbilityId, ['controls', Node], {
// 	$id: 'AssetAbilityControlFieldId'
// })
// export type AssetAbilityControlFieldId = Opaque<
// 	Static<typeof AssetAbilityControlFieldId>
// >

export const DelveSiteId = UncollectableId(['delve_sites'], {
	examples: ['delve/delve_sites/alvas_rest'],
	$id: 'DelveSiteId'
})
export type DelveSiteId = Opaque<Static<typeof DelveSiteId>>

export const DelveSiteIdWildcard = toWildcard(DelveSiteId, {
	$id: 'DelveSiteIdWildcard'
})
export type DelveSiteIdWildcard = Static<typeof DelveSiteIdWildcard>

// export const DelveSiteDenizenId = Extend(DelveSiteId, ['denizens', DiceRange], {
// 	examples: ['delve/delve_sites/alvas_rest/denizens/1-27'],
// 	$id: 'DelveSiteDenizenId'
// })
// export type DelveSiteDenizenId = Opaque<Static<typeof DelveSiteId>>

export const DelveSiteThemeId = UncollectableId(['site_themes'], {
	$id: 'DelveSiteThemeId',
	examples: ['delve/site_themes/hallowed']
})
export type DelveSiteThemeId = Opaque<Static<typeof DelveSiteThemeId>>

export const DelveSiteThemeIdWildcard = toWildcard(DelveSiteThemeId, {
	$id: 'DelveSiteThemeIdWildcard'
})
export type DelveSiteThemeIdWildcard = Static<typeof DelveSiteThemeIdWildcard>
// export const ThemeFeatureRowId = Extend(DelveSiteThemeId, ['features', DiceRange], {
// 	$id: 'ThemeFeatureRowId'
// })
// export type ThemeFeatureRowId = Opaque<Static<typeof ThemeFeatureRowId>>

// export const ThemeDangerRowId = Extend(DelveSiteThemeId, ['dangers', DiceRange], {
// 	$id: 'ThemeDangerRowId'
// })
// export type ThemeDangerRowId = Opaque<Static<typeof ThemeDangerRowId>>

export const DelveSiteDomainId = UncollectableId(['site_domains'], {
	$id: 'DelveSiteDomainId',
	examples: ['delve/site_domains/shadowfen']
})
export type DelveSiteDomainId = Opaque<Static<typeof DelveSiteDomainId>>

export const DelveSiteDomainIdWildcard = toWildcard(DelveSiteDomainId, {
	$id: 'DelveSiteDomainIdWildcard'
})
export type DelveSiteDomainIdWildcard = Static<typeof DelveSiteDomainIdWildcard>

// export const DomainFeatureRowId = Extend(
// 	DelveSiteDomainId,
// 	['features', DiceRange],
// 	{
// 		$id: 'DomainFeatureRowId'
// 	}
// )
// export type DomainFeatureRowId = Opaque<Static<typeof DomainFeatureRowId>>

// export const DomainDangerRowId = Extend(
// 	DelveSiteDomainId,
// 	['dangers', DiceRange],
// 	{
// 		$id: 'DomainDangerRowId'
// 	}
// )
// export type DomainDangerRowId = Opaque<Static<typeof DomainDangerRowId>>

export const MoveCategoryId = CollectionId(['moves'], {
	examples: ['starforged/collections/moves/adventure'],
	$id: 'MoveCategoryId'
})
export type MoveCategoryId = Opaque<Static<typeof MoveCategoryId>>

export const MoveCategoryIdWildcard = toWildcard(MoveCategoryId, {
	$id: 'MoveCategoryIdWildcard'
})
export type MoveCategoryIdWildcard = Static<typeof MoveCategoryIdWildcard>

const StandardMoveId = Extend(MoveCategoryId, [Node], {
	description: 'A move ID for a standard move.',
	$id: 'StandardMoveId'
})
const AssetMoveId = Extend(AssetAbilityId, ['moves', Node], {
	$id: 'AssetMoveId',
	description: 'A move ID for an asset move.'
})

export const MoveId = IdUnion([StandardMoveId, AssetMoveId], {
	description: 'A move ID, for a standard move or a unique asset move',
	examples: [
		'classic/moves/combat/strike',
		'starforged/assets/module/grappler/abilities/0/moves/ready_grappler'
	],
	$id: 'MoveId'
})
export type MoveId = Opaque<Static<typeof MoveId>>

export const MoveIdWildcard = IdUnion(
	[StandardMoveId, AssetMoveId].map((id) => toWildcard(id)),
	{
		title: 'Move ID (with wildcard)',
		description: 'A move ID with wildcards.',
		examples: [
			'*/moves/*/face_danger',
			'*/assets/ritual/*/abilities/*/moves/*'
		],
		$id: 'MoveIdWildcard'
	}
)
export type MoveIdWildcard = Opaque<Static<typeof MoveIdWildcard>>

export const OracleCollectionId = RecursiveCollectionId(['oracles'], {
	examples: [
		'starforged/collections/oracles/core',
		'starforged/collections/oracles/character/names',
		'starforged/collections/oracles/planets/furnace/settlements'
	],
	$id: 'OracleCollectionId'
})
export type OracleCollectionId = Opaque<Static<typeof OracleCollectionId>>

export const OracleCollectionIdWildcard = toWildcard(OracleCollectionId, {
	$id: 'OracleCollectionIdWildcard'
})
export type OracleCollectionIdWildcard = Static<
	typeof OracleCollectionIdWildcard
>

export const OracleRollableId = RecursiveCollectableId(['oracles'], {
	title: 'OracleRollableId',
	examples: [
		'starforged/oracles/core/action',
		'starforged/oracles/character/names/given',
		'starforged/oracles/planets/furnace/settlements/terminus'
	],
	$id: 'OracleRollableId'
})
export type OracleRollableId = Opaque<Static<typeof OracleRollableId>>

export const OracleRollableIdWildcard = toWildcard(OracleRollableId, {
	description: `Oracle table wildcards can also use '**' to represent any number of collection levels in the oracle tree.`,
	// For example, 'starforged/oracles/\*\*/location' represents any starforged table with the "location" key.`,
	// the double asterisk messes with JTD here :thinking:
	examples: [
		'*/oracles/**/peril',
		'starforged/oracles/character/names/*',
		'starforged/oracles/planets/*/settlements/*'
	],
	$id: 'OracleRollableIdWildcard'
})
export type OracleRollableIdWildcard = Opaque<
	Static<typeof OracleRollableIdWildcard>
>

const RowWithRange = Extend(OracleRollableId, [DiceRange], {
	$id: 'RowWithRange'
})
const RowNull = Extend(OracleRollableId, [Index], { $id: 'RowNull' })

// export const OracleTableRowId = IdUnion([RowWithRange, RowNull], {
// 	examples: [
// 		'classic/oracles/action_and_theme/action/1-1',
// 		'starforged/oracles/derelicts/zones/starship/0'
// 	],
// 	description:
// 		"Normally, rows will end with two numbers separated by a dash, indicating their dice range.\n\nRows with a single number represent unrollable rows that are sometimes included for rendering purposes; in this case, the number represents the row's index.",
// 	$id: 'OracleTableRowId'
// })
// export type OracleTableRowId = Opaque<Static<typeof OracleCollectionId>>

export const RarityId = UncollectableId(['rarities'], {
	examples: ['classic/rarities/ayethins_journal'],
	$id: 'RarityId'
})
export type RarityId = Opaque<Static<typeof RarityId>>

export const RarityIdWildcard = toWildcard(RarityId, {
	$id: 'RarityIdWildcard'
})
export type RarityIdWildcard = Static<typeof RarityIdWildcard>

export const AtlasCollectionId = CollectionId(['atlas'], {
	examples: ['classic/collections/atlas/ironlands'],
	$id: 'AtlasCollectionId'
})
export type AtlasCollectionId = Opaque<Static<typeof AtlasCollectionId>>

export const AtlasCollectionIdWildcard = toWildcard(AtlasCollectionId, {
	$id: 'AtlasCollectionIdWildcard'
})
export type AtlasCollectionIdWildcard = Static<typeof AtlasCollectionIdWildcard>

export const AtlasEntryId = Extend(AtlasCollectionId, [Node], {
	examples: ['classic/atlas/ironlands/hinterlands'],
	$id: 'AtlasEntryId'
})
export type AtlasEntryId = Opaque<Static<typeof AtlasEntryId>>

export const AtlasEntryIdWildcard = toWildcard(AtlasEntryId, {
	$id: 'AtlasEntryIdWildcard'
})
export type AtlasEntryIdWildcard = Opaque<Static<typeof AtlasEntryIdWildcard>>

export const TruthId = UncollectableId(['truths'], {
	examples: ['classic/truths/iron', 'starforged/truths/iron'],
	$id: 'TruthId'
})
export type TruthId = Opaque<Static<typeof TruthId>>

export const TruthIdWildcard = toWildcard(TruthId, {
	$id: 'TruthIdWildcard'
})
export type TruthIdWildcard = Static<typeof TruthIdWildcard>


// export const TruthOptionId = Extend(TruthId, [Index], {
// 	examples: ['classic/truths/iron/0', 'starforged/truths/iron/0'],
// 	$id: 'TruthOptionId'
// })
// export type TruthOptionId = Opaque<Static<typeof TruthOptionId>>

const RuleIdHead: IdElement[] = [Pkg, 'rules']

export const StatRuleId = Id([...RuleIdHead, 'stats', Node], {
	$id: 'StatRuleId'
})
export type StatRuleId = Static<typeof StatRuleId>

export const ConditionMeterRuleId = Id([...RuleIdHead, 'condition_meters', Node], {
	$id: 'ConditionMeterRuleId',
	examples: [
		'classic/rules/condition_meters/health',
		'starforged/rules/condition_meters/spirit'
	]
})
export type ConditionMeterRuleId = Static<typeof ConditionMeterRuleId>

export const SpecialTrackRuleId = Id([...RuleIdHead, 'special_tracks', Node], {
	$id: 'SpecialTrackRuleId',
	examples: [
		'classic/rules/special_tracks/bonds',
		'delve/rules/special_tracks/failure',
		'starforged/rules/special_tracks/bonds_legacy'
	]
})
export type SpecialTrackRuleId = Static<typeof SpecialTrackRuleId>

export const ImpactRuleCollectionId = CollectionId(['rules', 'impacts'], {
	$id: 'ImpactRuleCollectionId',
	examples: [
		'classic/collections/rules/impacts/conditions',
		'starforged/collections/rules/impacts/vehicle_troubles'
	]
})
export type ImpactRuleCollectionId = Static<typeof ImpactRuleCollectionId>

export const ImpactRuleId = Extend(ImpactRuleCollectionId, [Node], {
	$id: 'ImpactRuleId',
	examples: [
		'classic/rules/impacts/conditions/wounded',
		'starforged/rules/impacts/vehicle_troubles/battered'
	]
})
export type ImpactRuleId = Static<typeof ImpactRuleId>
export type TAnyId = TRef<TString | TUnion<(TString | TRef<TString>)[]>>
