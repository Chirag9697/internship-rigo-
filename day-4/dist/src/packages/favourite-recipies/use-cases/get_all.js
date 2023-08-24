"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_all = void 0;
const favourite_recipies_1 = require("../domain/favourite-recipies");
// favouriterecipe
const get_all = async () => {
    const allrecipies = await favourite_recipies_1.favouriterecipies.query();
    console.log(allrecipies);
    // return allpersons;
    return allrecipies;
};
exports.get_all = get_all;
//# sourceMappingURL=get_all.js.map