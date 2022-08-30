import type { Asset, MoveCategory, Suggestions } from "../index.js";
import { MoveOutcomes, MoveTrigger, SourceInheritor, Title } from "../index.js";
import type { Gamespace, IAssetAbility, IDisplayWithTitle, IMove, IMoveCategory, IOracle, ISource } from "../../json_out/index.js";
import type { IMoveYaml } from "../../yaml_in/moves/IMoveYaml";
/**
 * Object representing a Starforged move.
 * @internal
 */
export declare class Move extends SourceInheritor implements IMove {
    $id: IMove["$id"];
    Name: string;
    Title: Title;
    Optional: boolean;
    Category: MoveCategory["$id"];
    Asset?: this["Category"] extends `${Gamespace}/Moves/Assets` ? Asset["$id"] : undefined;
    "Progress Move"?: boolean | undefined;
    "Variant of"?: IMove["$id"] | undefined;
    Display: IDisplayWithTitle;
    Trigger: MoveTrigger;
    Text: string;
    Tags?: string[] | undefined;
    Oracles?: IOracle["$id"][] | undefined;
    Suggestions?: Suggestions | undefined;
    Outcomes?: MoveOutcomes | undefined;
    constructor(json: IMoveYaml, parent: IMoveCategory | IAssetAbility, gamespace: Gamespace, ...sourceAncestors: ISource[]);
}
//# sourceMappingURL=Move.d.ts.map