"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = void 0;
const comment_1 = require("../domain/comment");
const update = async (data, id) => {
    const hel = await comment_1.comment.query().findById(id).update(data);
    console.log("insert=", hel);
    return hel;
};
exports.update = update;
//# sourceMappingURL=update.js.map