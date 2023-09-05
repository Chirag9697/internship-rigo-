"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleterecord = void 0;
const favourite_recipe_1 = require("../domain/favourite-recipe");
// import {user} from '../domain/user';
favourite_recipe_1.favouriterecipe;
const deleterecord = async (id) => {
    const deleting = await favourite_recipe_1.favouriterecipe.query().deleteById(id);
    console.log(deleting);
    // console.log(allpersons);
};
exports.deleterecord = deleterecord;
//# sourceMappingURL=delete.js.map