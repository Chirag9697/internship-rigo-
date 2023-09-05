"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_one = void 0;
const recipies_1 = require("../domain/recipies");
const get_one = async (id) => {
    const recipe = await recipies_1.recipies.query().first().where('id', '=', id);
    return recipe;
};
exports.get_one = get_one;
//# sourceMappingURL=get_one.js.map