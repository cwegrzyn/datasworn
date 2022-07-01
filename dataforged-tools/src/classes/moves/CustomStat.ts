//License: MIT
import { CustomStatOption } from "@classes/index.js";
import type { ICustomStat } from "@json_out/index.js";
import { formatIdFragment } from "@utils/toIdFragment.js";
import type { ICustomStatYaml } from "@yaml_in/index.js";


/**
 * @internal
 */
export class CustomStat implements ICustomStat {
  $id: ICustomStat["$id"];
  Name: string;
  Options: CustomStatOption[];
  constructor(json: ICustomStatYaml, id: ICustomStat["$id"]) {
    this.$id = id;
    this.Name = json.Name;
    this.Options = json.Options?.map(option => new CustomStatOption(option, `${id}/${formatIdFragment(json._idFragment??json.Name)}`));
  }
}
