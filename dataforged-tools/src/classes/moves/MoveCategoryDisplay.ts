import type { IDisplayWithTitle, MoveCategoryTitle } from "@json_out/index.js";
import { badJsonError } from "@utils/logging/badJsonError.js";
import { validateColor } from "@utils/validateColor.js";

/**
 * @internal
 */
export class MoveCategoryDisplay implements IDisplayWithTitle {
  Title: MoveCategoryTitle;
  Color?: string | undefined;
  constructor(title: MoveCategoryTitle, color?: string|undefined) {
    this.Title = title;
    if (color && !validateColor(color)) {
      throw badJsonError(this.constructor, color, "Not a valid color.");
    }
    this.Color = color ?? undefined;
  }
}
