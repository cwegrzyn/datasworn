import type { IMove , IMoveOutcomes , IMoveTrigger } from "@json_out/index.js";
import type { IOutcomeMiss, IOutcomeStrongHit, IOutcomeWeakHit, MoveOutcome } from "@json_out/moves/IMoveOutcomeInfo.js";
import type { PartialDeep, StubBy } from "@utils/index.js";

/**
 * Describes alterations applied to moves by asset abilities.
 * @public
 */
export interface IAlterMove extends StubBy<IMove, "Trigger"|"Text", "Name"|"Title"|"Category"|"Display"|"Source"|"Outcomes"|"Optional"> {
  /**
   * @pattern ^(Starforged|Ironsworn)/Assets/[A-z_-]+/[A-z_-]+/Abilities/[1-3]/Alter_Moves/[1-9][0-9]*$
   */
  $id: string;
  /**
   * The `$id`s of the move(s) to be altered. If it's `null`, it can alter *any* move to which its trigger conditions apply. If it's `undefined`, see `Extends` instead.
   * @nullable
   */
  Moves?: IMove["$id"][] | null | undefined;
  /**
   * Some asset abilities alter/extend other asset abilities, specified as an array of IDs. Only changed properties are specified; other properties are the same.
   */
  Alters?: IAlterMove["$id"][] | undefined;
  /**
   * The trigger required by the asset ability. If `undefined`, the move alteration applies to all uses of the specified moves, so long as they also meet any implicit asset requirements (fictional framing, `IAsset.Requirement`, not being Broken or Out of Action, etc).
   */
  Trigger?: IMoveTrigger | undefined;
  /**
   * Markdown rules text describing added effects which apply *before* the move is rolled, such as adds.
   * @localize
   */
  Text?: string | undefined;
  /**
   * Added rules text that applies on move outcomes.
   */
  Outcomes?: IAlterMoveOutcomes | undefined;
}

/**
 * @public
 */
export interface IAlterMoveOutcomes extends Omit<IMoveOutcomes, keyof typeof MoveOutcome> {
  "Strong Hit"?: IAlterStrongHit | undefined;
  "Weak Hit"?: IAlterWeakHit | undefined;
  Miss?: IAlterMiss | undefined;
}

/**
 * @public
 */
export interface IAlterStrongHit extends PartialDeep<IOutcomeStrongHit> {}
/**
 * @public
 */
export interface IAlterWeakHit extends PartialDeep<IOutcomeWeakHit> {}
/**
 * @public
 */
export interface IAlterMiss extends PartialDeep<IOutcomeMiss> {}