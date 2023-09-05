"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_one = void 0;
const favourite_recipies_1 = require("../domain/favourite-recipies");
// favouriterecipe
const get_one = async (id) => {
    const recipe = await favourite_recipies_1.favouriterecipies.query().first().where('id', '=', id);
    return recipe;
};
exports.get_one = get_one;
//# sourceMappingURL=get_one.js.map