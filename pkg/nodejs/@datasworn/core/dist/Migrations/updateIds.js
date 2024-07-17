"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateIdInString = updateIdInString;
exports.updateIdsInMarkdown = updateIdsInMarkdown;
exports.updateId = updateId;
const CONST_js_1 = require("../IdElements/CONST.js");
const neverLegacyIdSubstrings = new Set([
    ',',
    '. ',
    ': ',
    '[',
    ']',
    '(',
    ')',
    '://',
    '.svg',
    '.webp',
]);
const alwaysMdKeys = new Set([
    'description',
    'summary',
    'quest_starter',
    'your_truth',
    'text',
    'text2',
    'text3',
    'requirement',
]);
const neverMdOrIdKeys = new Set([
    'label',
    'name',
    'title',
    '_comment',
    'url',
    'license',
    'icon',
    'roll_type',
    'field_type',
    'oracle_type',
    'field_type',
    'choice_type',
]);
/**
 * Updates any string containing a v0.0.10 ID reference to be compatible with v0.1.0.
 * @param k The key of the JSON value.
 * @param v The JSON value.
 * @param replacementMap The record object that maps v0.0.10
 * @param unreplacedIds An optional set that contains any IDs that were unable to be replaced.
 * @example ```typescript
 * import fs from 'node:fs/promises'
 * const [replacementMap, oldJson] = await Promise.all([
 *   fs.readFile('./path/to/id_replacement_hash.json'),
 *   fs.readFile('./path/to/old_datasworn_data.json')
 * ])
 * const unreplacedIds = new Set<string>()
 *
 * // parse and do ID replacements
 * const updated = JSON.parse(oldJson, (k,v) => updateIdsInString(k,v, JSON.parse(replacementMap), unreplacedIds))
 * ```
 */
function updateIdInString(k, v, replacementMap, unreplacedIds) {
    switch (true) {
        case typeof v !== 'string':
        case neverMdOrIdKeys.has(k):
            return v;
        case isPlainLegacyId(k, v):
            return updateId(v, replacementMap, unreplacedIds);
        // case alwaysMdKeys.has(k as string):
        default:
            return updateIdsInMarkdown(v, replacementMap, unreplacedIds);
    }
}
/**
 * Updates markdown ID pointers and templates from v0.0.10 to v0.1.0.
 * @param md The markdown string to change.
 * @returns A new string with the replaced values.
 */
function updateIdsInMarkdown(md, replacementMap, unreplacedIds) {
    let newStr = md;
    newStr = newStr.replaceAll(oldMarkdownLinkPattern, (substring, linkText, id) => {
        const replacementId = updateId(id, replacementMap, unreplacedIds);
        if (id == null)
            return substring;
        const newLinkText = `${CONST_js_1.MdLinkPrefix}${CONST_js_1.PrefixSep}${replacementId}`;
        return `[${linkText}](${newLinkText})`;
    });
    newStr = newStr.replaceAll(oldMarkdownMacroPattern, (substring, directive, id) => {
        const replacementId = updateId(id, replacementMap, unreplacedIds);
        if (id == null)
            return substring;
        return `{{${directive}>${replacementId}}}`;
    });
    return newStr;
}
/** Updates a Datasworn ID string from v0.0.10 to v0.1.0. */
function updateId(id, replacementMap, unreplacedIds) {
    const replacement = replacementMap[id];
    if (replacement == null) {
        unreplacedIds === null || unreplacedIds === void 0 ? void 0 : unreplacedIds.add(id);
        return null;
    }
    return replacement;
}
/**
 * Matches an entire markdown macro (v0.0.10).
 * @example "{{text:starforged/oracle_rollable/factions/name/legacy}}"
 */
const oldMarkdownMacroPattern = /\{\{(?<directive>[a-z_]+):(?<id>[a-z_\\/\\.\d]+?)\}\}/g;
/**
 * Matches *only* the actual ID of an ID link (v0.0.10)
 * @example "[Legacy](id:starforged/oracle_rollable/factions/name/legacy)"
 */
const oldMarkdownLinkPattern = /\[(?<linkText>\w.+?)\]\(id:(?<id>[a-z_\\/\\.\d]+?)\)/g;
function isPlainLegacyId(k, v) {
    switch (true) {
        case alwaysMdKeys.has(k):
        case neverMdOrIdKeys.has(k):
        case !v.includes('/'):
            return false;
        default:
            for (const substr of neverLegacyIdSubstrings)
                if (v.includes(substr))
                    return false;
            return true;
    }
}
