
import type { AssetId } from "@json_out/index.js";

/**
 * An ID that references an asset condition meter.
 * **Attached_Asset_Condition_Meter:** In *Ironsworn: Starforged* is is used by Module assets, which can attach to certain other assets (e.g. Starship, Rover); it indicates that the condition meter of the "parent" asset should be rolled. For example, a Module attached to a Starship would roll the Starship's condition meter.
 * @internal
 * @asType string
 */
export type AssetConditionMeterRef = "Attached_Asset_Condition_Meter" | AssetConditionMeterId;
/**
 * ID for an asset's Condition Meter.
 * @internal
 * @asType string
 */
export type AssetConditionMeterId = `${AssetId}/Condition_Meter`;
/**
 * @internal
 * @asType string
 */
export type AssetConditionMeterIdBase = `${AssetId}/Condition_Meter`;