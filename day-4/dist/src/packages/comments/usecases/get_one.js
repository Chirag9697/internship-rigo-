"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_one = void 0;
const comment_1 = require("../domain/comment");
const get_one = async (id) => {
    const comm = await comment_1.comment.query().first().where('id', '=', id);
    return comm;
};
exports.get_one = get_one;
//# sourceMappingURL=get_one.js.map