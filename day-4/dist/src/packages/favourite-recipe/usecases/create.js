"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const favourite_recipe_1 = require("../domain/favourite-recipe");
const create = async (data) => {
    const hel = await favourite_recipe_1.favouriterecipe.query().insert(data);
    // console.log("insert=",hel);
    return hel;
};
exports.create = create;
//# sourceMappingURL=create.js.map