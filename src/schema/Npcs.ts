import { Type, type Static, type TString } from '@sinclair/typebox'
import { Id, Localize, Progress } from './common/index.js'
import * as Generic from './Generic.js'
import * as Utils from './Utils.js'
import { Assign, FlatIntersect } from './utils/FlatIntersect.js'
import { Namespace } from './Symbols.js'
import { EmbeddedPrimaryNode } from './utils/EmbeddedNode.js'
import { EmbedOnlyNode } from './generic/EmbedOnlyNode.js'

const ns = 'Npcs'

export const NpcNature = Type.Ref(Localize.Label, {
	description:
		"A localized category label describing the nature of this NPC.\n\nIn Ironsworn classic, this is probably the singular form of the parent collection's name.\n\nFor Starforged, see the table on p. 258 for examples.",
	examples: [
		// classic natures
		'Ironlander',
		'Firstborn',
		'Animal',
		'Beast',
		'Horror',
		'Anomaly',
		// Starforged natures
		'Creature',
		// 'Horror',
		'Human',
		'Machine',
		'Monster',
		'Vehicle'
	],
	$id: 'NpcNature',
	[Namespace]: ns
})
export type NpcNature = Static<typeof NpcNature>

const NpcMixin = FlatIntersect([
	Generic.Cyclopedia,
	Type.Object({
		rank: Type.Ref(Progress.ChallengeRank, {
			description: 'The suggested challenge rank for this NPC.'
		}),
		nature: Type.Ref(NpcNature),
		drives: Type.Array(Type.Ref(Localize.MarkdownString)),
		tactics: Type.Array(Type.Ref(Localize.MarkdownString))
	})
])

export const NpcVariant = EmbedOnlyNode(
	Type.Pick(NpcMixin, ['name', 'rank', 'nature', 'summary', 'description']),
	'variant',
	'npc'
)

export type NpcVariant = Static<typeof NpcVariant>

export const Npc = Generic.CollectableNode(
	FlatIntersect([
		NpcMixin,
		Type.Object({
			variants: Type.Optional(Generic.Dictionary(Type.Ref(NpcVariant)))
		})
	]),
	'npc',
	{
		[Namespace]: ns,
		description:
			'A non-player character entry, similar to those in Chapter 5 of the Ironsworn Rulebook, or Chapter 4 of Starforged.'
	}
)

export type Npc = Static<typeof Npc>

export const NpcCollection = Generic.CollectionNode(
	Type.Object({}),
	'npc_collection',
	{
		[Namespace]: ns
	}
)
export type NpcCollection = Static<typeof NpcCollection>
export type TNpcCollection = typeof NpcCollection
