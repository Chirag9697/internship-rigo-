"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_all = void 0;
// import {Recipe} from '../domain/recipe';
const comment_1 = require("../domain/comment");
const get_all = async () => {
    const allcomments = await comment_1.comment.query();
    if (!allcomments) {
        throw new Error("cannot get all comments");
    }
    return allcomments;
};
exports.get_all = get_all;
//# sourceMappingURL=get_all.js.map