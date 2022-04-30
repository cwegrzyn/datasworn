import type { IActorRecord } from "@game_objects/IActorRecord.js";
import type { FactionType, GameObjectType } from "@game_objects/index.js";
import type { AttributeKey } from "@json_out/index.js";
/**
 * @public
 */
export type IFactionRecord = IActorRecord<GameObjectType.Faction,
  AttributeKey.FactionType|
  AttributeKey.Influence
>;
/**
 * @public
 */
export type IFactionGuildRecord = IActorRecord<GameObjectType.Faction,
  AttributeKey.FactionType|
  AttributeKey.Influence|
  AttributeKey.Guild
> & {
  [AttributeKey.FactionType]: FactionType.Guild
};
/**
 * @public
 */
export type IFactionFringeGroupRecord = IActorRecord<GameObjectType.Faction,
  AttributeKey.FactionType|
  AttributeKey.Influence|
  AttributeKey.FringeGroup
> & {
  [AttributeKey.FactionType]: FactionType.FringeGroup
};
/**
 * @public
 */
export type IFactionDominionRecord = IActorRecord<GameObjectType.Faction,
  AttributeKey.FactionType|
  AttributeKey.Influence|
  AttributeKey.Leadership|
  AttributeKey.Dominion
> & {
  [AttributeKey.FactionType]: FactionType.Dominion
};
