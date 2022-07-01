
//License: MIT
//License: MIT
//License: MIT
//License: MIT
//License: MIT
//License: MIT
//License: MIT
//License: MIT
//License: MIT
//License: MIT
import type { ISource , SourceTitle } from "@json_out/index.js";
import _ from "lodash-es";

/**
 * @internal
 */
export class Source implements ISource {
  Title: SourceTitle;
  Date?: string | undefined;
  Page?: number | undefined;
  Url?: string | undefined;
  constructor(json: Partial<ISource>, ...ancestorSourceJson: Partial<ISource>[]) {
    const sourceStack = _.cloneDeep([ ..._.compact(
      ancestorSourceJson)
      .reverse()
    ,
      json as ISource ]);
    const merged = sourceStack.reduce((a,b) => _.merge(a,b));
    if (!merged.Title) {
      throw Error("Unable to find title in source or ancestor source objects.");
    }
    this.Title = merged.Title;
    this.Date = merged.Date;
    this.Page = merged.Page;
    this.Url = merged.Url;
  }
}

