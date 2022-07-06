//License: MIT
import { MoveCategory } from "../classes/index.js";
import { MASTER_DATA_PATH, REFS_PATH } from "../constants/index.js";
import { Gamespace } from "../json_out/index.js";
import { buildLog } from "./logging/buildLog.js";
import { concatWithYamlRefs } from "./process_yaml/concatWithYamlRefs.js";
import { sortIronsworn } from "./sortIronsworn.js";
import fg from "fast-glob";
import _ from "lodash-es";
/**
 * It takes the data from the YAML files, and then it iterates over the categories, and then it
 * iterates over the moves in each category, and then it creates a MoveCategory object for each
 * category, and then it returns an array of all of those MoveCategory objects
 * @returns An array of MoveCategory objects.
 */
export function buildMoves(gamespace = Gamespace.Starforged) {
    buildLog(buildMoves, "Building moves...");
    const moveFiles = fg.sync(`${MASTER_DATA_PATH}/${gamespace}/Moves*.(yml|yaml)`, { onlyFiles: true });
    const moveRoots = moveFiles
        .map(moveFile => concatWithYamlRefs(REFS_PATH, moveFile));
    const json = [];
    // merges categories that are spread across multiple files
    // e.g. Moves + Moves-Delve
    moveRoots.forEach(root => {
        root["Move Categories"]
            .forEach((moveCatData) => {
            const moveCat = new MoveCategory(moveCatData, gamespace, root.Source);
            const targetIndex = json.findIndex(item => item.Name === moveCat.Name);
            if (targetIndex === -1) {
                json.push(moveCat);
            }
            else {
                buildLog(buildMoves, `A category named "${moveCat.Name}" exists, merging...`);
                json[targetIndex].Moves = json[targetIndex].Moves.concat(...moveCat.Moves).sort((a, b) => sortIronsworn(a.Source, b.Source));
            }
        });
    });
    //   mv.Categories = mv.Categories.map((moveCatData) => {
    //     moveCatData.Moves.map((moveData, index, movesInCat) => {
    //       moveData.Source = movesRoot.Source;
    //       return moveData;
    //     });
    //     return moveCatData;
    //   });
    //   return new MoveCategory(moveCatData, gamespace, movesRoot.Source);
    // });
    buildLog(buildMoves, `Finished building ${json.length} move categories containing ${_.sum(json.map(moveCat => moveCat.Moves.length))} moves.`);
    return json.sort((a, b) => sortIronsworn(a.Source, b.Source));
}
//# sourceMappingURL=buildMoves.js.map