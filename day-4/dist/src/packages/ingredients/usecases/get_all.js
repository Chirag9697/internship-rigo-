"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_all = void 0;
// import {recipies} from '../domain/recipies';
const ingredients_1 = require("../domain/ingredients");
const get_all = async () => {
    const query = (await ingredients_1.ingredients.query());
    console.log(query);
    if (!query) {
        throw new Error("not able to get ingredients");
        return;
    }
    return query;
};
exports.get_all = get_all;
//# sourceMappingURL=get_all.js.map