"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleterecord = void 0;
// import {user} from '../domain/user';
const likes_1 = require("../domain/likes");
const deleterecord = async (id) => {
    const deleting = await likes_1.likes.query().deleteById(id);
    console.log(deleting);
    if (!deleting) {
        throw new Error("not able to delete");
        return;
    }
    // return deleting;
    // console.log(allpersons);
};
exports.deleterecord = deleterecord;
//# sourceMappingURL=delete.js.map