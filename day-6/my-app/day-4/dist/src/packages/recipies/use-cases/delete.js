"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleterecord = void 0;
// import {user} from '../domain/user';
const recipies_1 = require("../domain/recipies");
const deleterecord = async (id) => {
    const deleting = await recipies_1.recipies.query().deleteById(id);
    if (!deleting) {
        throw new Error("there is some error");
        return;
    }
};
exports.deleterecord = deleterecord;
//# sourceMappingURL=delete.js.map