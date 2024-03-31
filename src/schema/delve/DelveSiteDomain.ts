import { Type, type Static, CloneType } from '@sinclair/typebox'
import { JsonTypeDef } from '../Symbols.js'
import { toJtdElements } from '../../scripts/json-typedef/utils.js'
import { Id, Localize, Metadata } from '../common/index.js'
import {
	OracleTableRowText,
	StaticRowPartial,
	TableRowMixin
} from '../oracles/TableRow.js'
import * as Generic from '../Generic.js'

// export const DelveSiteDomainFeatureRow = CloneType(TableRowMixin, {
// 	$id: 'DelveSiteDomainFeatureRow',
// 	description:
// 		'Represents a single Feature entry from a delve site Domain card.'
// })
// export type DelveSiteDomainFeatureRow = Static<typeof DelveSiteDomainFeatureRow>
// export const DelveSiteDomainDangerRow = CloneType(TableRowMixin, {
// 	$id: 'DelveSiteDomainDangerRow',
// 	description: 'Represents a single Danger entry from a delve site Domain card.'
// })
// export type DelveSiteDomainDangerRow = Static<typeof DelveSiteDomainDangerRow>

// const DelveSiteDomainFeatures = Type.Array(Type.Ref(DelveSiteDomainFeatureRow))
const DelveSiteDomainFeatures = Type.Array(Type.Ref(OracleTableRowText))

// const DelveSiteDomainDangers = Type.Array(Type.Ref(DelveSiteDomainDangerRow))
const DelveSiteDomainDangers = Type.Array(Type.Ref(OracleTableRowText))

export const DelveSiteDomain = Generic.SourcedNode(
	Type.Ref(Id.DelveSiteDomainId),
	Type.Object({
		summary: Type.Ref(Localize.MarkdownString, { deprecated: true }),
		description: Type.Optional(Type.Ref(Localize.MarkdownString)),
		icon: Type.Optional(Type.Ref(Metadata.SvgImageUrl)),
		name_oracle: Type.Optional(
			Type.Ref(Id.OracleRollableId, {
				description:
					'An oracle table ID containing place name elements. For examples, see oracle ID `delve/oracles/site_name/place/barrow`, and its siblings in oracle collection ID `delve/collections/oracles/site_name/place`. These oracles are used by the site name oracle from Ironsworn: Delve (ID: delve/oracles/site_name/format) to create random names for delve sites.'
			})
		),
		features: Type.Intersect(
			[
				DelveSiteDomainFeatures,
				Type.Tuple([
					StaticRowPartial({ min: 21, max: 43 }),
					StaticRowPartial({ min: 44, max: 56 }),
					StaticRowPartial({ min: 57, max: 64 }),
					StaticRowPartial({ min: 65, max: 68 }),
					StaticRowPartial({ min: 69, max: 72 }),
					StaticRowPartial({ min: 73, max: 76 }),
					StaticRowPartial({ min: 77, max: 80 }),
					StaticRowPartial({ min: 81, max: 84 }),
					StaticRowPartial({ min: 85, max: 88 }),
					StaticRowPartial(
						// FIXME: disabled for now because the defaults make TypeCompiler upset
						{ min: 89, max: 98 }

						// {
						// 	result: 'Something unusual or unexpected',
						// 	suggestions: {
						// 		oracles: [
						// 			'delve/oracles/feature/aspect',
						// 			'delve/oracles/feature/focus'
						// 		]
						// 	}
						// }
					),
					StaticRowPartial(
						{ min: 99, max: 99 }
						// {
						// result: 'You transition into a new theme'
						// suggestions: {
						// 	oracles: ['delve/oracles/site_nature/theme']
						// }
						// }
					),
					StaticRowPartial(
						{ min: 100, max: 100 }
						// {
						// 	result: 'You transition into a new domain',
						// 	suggestions: {
						// 		oracles: ['delve/oracles/site_nature/domain']
						// 	}
						// }
					)
				])
			],
			{
				[JsonTypeDef]: {
					schema: toJtdElements(DelveSiteDomainFeatures)
				}
			}
		),
		dangers: Type.Intersect(
			[
				DelveSiteDomainDangers,
				Type.Tuple([
					StaticRowPartial({ min: 31, max: 33 }),
					StaticRowPartial({ min: 34, max: 36 }),
					StaticRowPartial({ min: 37, max: 39 }),
					StaticRowPartial({ min: 40, max: 42 }),
					StaticRowPartial({ min: 43, max: 45 })
				])
			],
			{
				[JsonTypeDef]: {
					schema: toJtdElements(DelveSiteDomainDangers)
				}
			}
		)
	}),
	{
		$id: 'DelveSiteDomain',
		description: 'A delve site Domain card.'
	}
)
// console.log(DelveSiteDomain)
// console.log(DelveSiteDomainPartial)
// console.log(DelveSiteDomain)
export type DelveSiteDomain = Static<typeof DelveSiteDomain>
export type TDelveSiteDomain = typeof DelveSiteDomain
