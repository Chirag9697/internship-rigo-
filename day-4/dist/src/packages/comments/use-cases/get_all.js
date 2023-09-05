"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_all = void 0;
// import {Recipe} from '../domain/recipe';
const comments_1 = require("../domain/comments");
const get_all = async (id) => {
    const allcomments = await comments_1.comments.query().where('recipeid', '=', `${id}`);
    if (!allcomments) {
        throw new Error("cannot get all comments");
    }
    return allcomments;
};
exports.get_all = get_all;
//# sourceMappingURL=get_all.js.map