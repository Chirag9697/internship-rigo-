"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleterecord = void 0;
// import {user} from '../domain/user';
const recipe_1 = require("../domain/recipe");
const deleterecord = async (id) => {
    const deleting = await recipe_1.Recipe.query().deleteById(id);
    console.log(deleting);
    // console.log(allpersons);
};
exports.deleterecord = deleterecord;
//# sourceMappingURL=delete.js.map