"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleterecord = void 0;
// import {user} from '../domain/user';
const comment_1 = require("../domain/comment");
const deleterecord = async (id) => {
    const deleting = await comment_1.comment.query().deleteById(id);
    console.log(deleting);
    return deleting;
    // console.log(allpersons);
};
exports.deleterecord = deleterecord;
//# sourceMappingURL=delete.js.map