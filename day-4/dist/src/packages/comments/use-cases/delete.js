"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletewithrecipeid = exports.deleterecord = void 0;
// import {user} from '../domain/user';
const comments_1 = require("../domain/comments");
const deleterecord = async (id) => {
    const deleting = await comments_1.comments.query().deleteById(id);
    // console.log(deleting);]
    if (!deleting) {
        throw new Error("not able to delete");
    }
    // return deleting;
    // console.log(allpersons);
};
exports.deleterecord = deleterecord;
const deletewithrecipeid = async (recipeid) => {
    const deleting = await comments_1.comments.query().delete().where('recipeid', '=', `${recipeid}`);
    // if(!deleting){
    // throw new Error("not able to delete");
    // }
};
exports.deletewithrecipeid = deletewithrecipeid;
//# sourceMappingURL=delete.js.map