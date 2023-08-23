"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_one = void 0;
const favourite_recipe_1 = require("../domain/favourite-recipe");
// favouriterecipe
const get_one = async (id) => {
    const recipe = await favourite_recipe_1.favouriterecipe.query().first().where('id', '=', id);
    return recipe;
};
exports.get_one = get_one;
//# sourceMappingURL=get_one.js.map