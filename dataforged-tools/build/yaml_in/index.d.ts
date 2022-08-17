import type { PartialDeepBy } from "../utils/index.js";
/**
 * A stub where keys `$id`, `Display`, `Source`, `Optional`, and PartialKey (*and* their properties) are nullable, and OmitKey is omitted.
 * @internal
 */
export declare type YamlStub<T, PartialKey extends string = "", OmitKey extends string = ""> = Omit<PartialDeepBy<T, "$id" | "Source" | "Display" | "Optional" | PartialKey>, OmitKey> & {
    _idFragment?: string | undefined;
};
export * from "./assets/index.js";
export * from "./common/index.js";
export * from "./moves/index.js";
export * from "./oracles/index.js";
export * from "./truths/index.js";
export * from "./templates/index.js";
export * from "./cyclopedia/index.js";
export * from "./delve_site/index.js";
//# sourceMappingURL=index.d.ts.map