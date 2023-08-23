"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const comment_1 = require("../domain/comment");
const create = async (data) => {
    const hel = await comment_1.comment.query().insert(data);
    console.log("insert=", hel);
    return hel;
};
exports.create = create;
//# sourceMappingURL=create.js.map