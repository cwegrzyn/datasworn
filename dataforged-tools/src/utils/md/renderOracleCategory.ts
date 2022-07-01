//License: MIT

// /**
//  * It takes an OracleCategory and returns a markdown string
//  * @param oracleCat - OracleCategory
//  * @param headerLevel - The header level to use for the category title.
//  * @returns A string of markdown.
//  */
// export function renderOracleCategory(oracleCat: IOracleCategory, headerLevel = 2) {
//   buildLog(renderOracleCategory, `Generating markdown for ${oracleCat.Display.Title
//   }...`);
//   const header = _.repeat("#", headerLevel) + " " + oracleCat.Display.Title;
//   const items = [header];
//   if (oracleCat.Description) {
//     items.push(oracleCat.Description);
//   }
//   if (oracleCat.Oracles) {
//     items.push(...oracleCat.Oracles.map(oracle => renderOracle(oracle, headerLevel + 1)).flat(1));
//   }
//   if (oracleCat.Categories) {
//     items.push(...oracleCat.Categories.map(oracleSubCat => renderOracleCategory(oracleSubCat, headerLevel + 1)).flat(1));
//   }
//   return items.flat(1).join("\n\n");
// }
