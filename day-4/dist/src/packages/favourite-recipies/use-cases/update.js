"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = void 0;
const favourite_recipies_1 = require("../domain/favourite-recipies");
// favouriterecipe
const update = async (data, id) => {
    const hel = await favourite_recipies_1.favouriterecipies.query().findById(id).patch(data);
    // console.log("insert=",hel);
    return hel;
};
exports.update = update;
//# sourceMappingURL=update.js.map