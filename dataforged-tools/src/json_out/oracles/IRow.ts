//License: MIT
import type { IAttribute, IHasDisplay, IHasGameObjects, IHasOracleContent, IHasRollTemplate, IHasSuggestions, IHasSummary, IMultipleRolls , IOracle } from "@json_out/index.js";
import { Nullable } from "@utils/types/Nullable.js";

/**
 * Interface representing a single row in an oracle table.
 * @public
 */
export interface IRow extends Partial<
  Nullable<IHasSummary> &
  IHasRollTemplate &
  IHasSuggestions &
  IHasOracleContent &
  IHasGameObjects &
  IHasDisplay
>  {
  /**
   * The ID of this row.
   * @pattern ^(Ironsworn|Starforged)/Oracles(/[A-z_-]+)+/[1-9][0-9]*(-[1-9][0-9]*)?(/Subtable/[1-9][0-9]*(-[1-9][0-9]*)?)?$
   * @nullable
   */
  $id?: string | null;
  /**
   * The low end of the dice range for this row.
   * @minimum 1
   * @maximum 100
   * @nullable
   */
  Floor: number | null;
  /**
   * The high end of the dice range for this row.
   * @minimum 1
   * @maximum 100
   * @nullable
   */
  Ceiling: number | null;
  /**
   * The primary result text for the row, annotated in Markdown.
   * In the book, this is frequently the only column aside from the roll column. Otherwise, it is the first column.
   * Some tables label this column as something other than Result; see the parent (or grandparent) Oracle.Display for more information.
   */
  Result: string;
  /**
   * A secondary markdown string that must be presented to the user for the implementation to be complete, but may benefit from progressive disclosure (such as a collapsible element, popover/tooltip, etc).
   *
   * Generally, `Summary` is longer than `Result`.
   *
   * Some tables label this column as something other than `Result`; see the parent (or grandparent) `IOracle.Display.Table` for more information.
   *
   * `null` is used in cases where an 'empty' `Summary` exists (example: Starship Type, p. 326). In the book, these table cells are rendered with the text `--` (and this is the recommended placeholder for tabular display). For display as a single result (e.g. VTT table roll output), however, `null` values can be safely omitted.
   * @nullable
   */
  Summary?: string | null | undefined;
  /**
   * Additional oracle tables that should be rolled when this row is selected.
   */
  "Oracle rolls"?: IOracle["$id"][] | undefined;
  /**
   * A table to be rolled when this row is selected. If this row references an external oracle, the `Oracles` property is used instead.
   */
  Subtable?: IRow[] | undefined;
  /**
   * Data for rows that call for multiple rolls, e.g. on `Roll twice` results.
   */
  "Multiple rolls"?: IMultipleRolls | undefined;
  /**
  * The attributes set by this row.
   */
  Attributes?: IAttribute[] | undefined;
}