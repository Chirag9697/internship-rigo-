"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_all = void 0;
// import {Recipe} from '../domain/recipe';
const recipeingredients_1 = require("../domain/recipeingredients");
const get_all = async (recipeid) => {
    const allrecipeingredients = await recipeingredients_1.recipeingredients.query().where('recipeid', '=', recipeid);
    // console.log(all);
    return allrecipeingredients;
};
exports.get_all = get_all;
//# sourceMappingURL=get_all.js.map