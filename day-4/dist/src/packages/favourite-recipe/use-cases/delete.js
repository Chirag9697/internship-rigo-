"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleterecord = void 0;
const favourite_recipe_1 = require("../domain/favourite-recipe");
const deleterecord = async (id) => {
    const deleting = await favourite_recipe_1.favouriterecipe.query().deleteById(id);
    if (!deleting) {
        throw new Error("not able to delete");
    }
};
exports.deleterecord = deleterecord;
//# sourceMappingURL=delete.js.map