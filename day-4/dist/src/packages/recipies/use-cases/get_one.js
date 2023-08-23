"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_one = void 0;
const recipe_1 = require("../domain/recipe");
const get_one = async (id) => {
    const recipe = await recipe_1.Recipe.query().first().where('id', '=', id);
    return recipe;
};
exports.get_one = get_one;
//# sourceMappingURL=get_one.js.map