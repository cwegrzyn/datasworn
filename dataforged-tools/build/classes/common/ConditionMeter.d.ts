import type { AssetType } from "../assets/AssetType.js";
import { MeterBase } from "./MeterBase.js";
import { MeterAlias } from "../../json_out/common/index.js";
import type { IConditionMeter, MeterCondition } from "../../json_out/common/index.js";
/**
 * @internal
 */
export declare class ConditionMeter extends MeterBase implements IConditionMeter {
    $id: IConditionMeter["$id"];
    Name: string;
    Max: number;
    Min: 0;
    "Value": number;
    Conditions: MeterCondition[];
    Aliases?: MeterAlias[] | undefined;
    constructor(json: IConditionMeter, id: string, assetType: AssetType["$id"]);
}
//# sourceMappingURL=ConditionMeter.d.ts.map