"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_one = void 0;
const comments_1 = require("../domain/comments");
const get_one = async (id) => {
    const comm = await comments_1.comments.query().first().where('id', '=', id);
    return comm;
};
exports.get_one = get_one;
//# sourceMappingURL=get_one.js.map