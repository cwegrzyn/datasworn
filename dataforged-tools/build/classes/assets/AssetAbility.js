import { AlterMomentum } from "./AlterMomentum.js";
import { AssetState } from "./AssetState.js";
import { AlterMove, Move } from "../index.js";
import { Replacement } from "../../json_out/index.js";
import { pickInput } from "../../utils/object_transform/pickInput.js";
import { replaceInAllStrings } from "../../utils/object_transform/replaceInAllStrings.js";
import { formatIdFragment } from "../../utils/toIdFragment.js";
import _ from "lodash-es";
/**
 * @internal
 */
export class AssetAbility {
    constructor(json, id, gamespace, parent) {
        this.$id = id;
        this.Label = json.Label;
        this.Text = json.Text;
        if (json.Inputs) {
            this.Inputs = json.Inputs.map(inputJson => pickInput(inputJson, this));
        }
        this.Enabled = json.Enabled ?? false;
        if (json["Alter Momentum"]) {
            this["Alter Momentum"] = new AlterMomentum(json["Alter Momentum"], this);
        }
        this["Alter Moves"] = json["Alter Moves"] ? json["Alter Moves"].map((alterMove, index) => {
            if (parent.Usage.Shared && !alterMove.Trigger?.By) {
                if (!alterMove.Trigger) {
                    alterMove.Trigger = {};
                }
                alterMove.Trigger.By = { Player: true, Ally: true };
            }
            const newData = new AlterMove(alterMove, this, index);
            return newData;
        }) : json["Alter Moves"];
        this["Alter Properties"] = json["Alter Properties"];
        if (this["Alter Properties"]?.States) {
            this["Alter Properties"].States = this["Alter Properties"].States.map(state => new AssetState(state, this));
        }
        if (json.Moves) {
            this.Moves = json.Moves.map(moveJson => {
                const moveDataClone = _.cloneDeep(moveJson);
                moveDataClone.Asset = parent.$id;
                moveDataClone.$id = `${this.$id.replace("/Assets/", "/Moves/Assets/")}/${formatIdFragment(moveDataClone._idFragment ?? moveDataClone.Title.Canonical)}`;
                moveDataClone.Category = `${gamespace}/Moves/Assets`;
                if (moveDataClone.Trigger.Options && parent["Condition Meter"]?.$id) {
                    moveDataClone.Trigger.Options = replaceInAllStrings(moveDataClone.Trigger.Options, Replacement.AssetMeter, parent["Condition Meter"].$id);
                    // console.log("asset ability move data", moveDataClone);
                }
                return new Move(moveDataClone, this, gamespace, parent.Source);
            });
        }
    }
}
//# sourceMappingURL=AssetAbility.js.map