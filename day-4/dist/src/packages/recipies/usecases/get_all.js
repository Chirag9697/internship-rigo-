"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_all = void 0;
const recipe_1 = require("../domain/recipe");
const get_all = async () => {
    const allrecipies = await recipe_1.Recipe.query();
    console.log(allrecipies);
    // return allpersons;
    return allrecipies;
};
exports.get_all = get_all;
//# sourceMappingURL=get_all.js.map