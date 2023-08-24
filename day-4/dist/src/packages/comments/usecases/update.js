"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = void 0;
const comments_1 = require("../domain/comments");
const update = async (data, id) => {
    const hel = await comments_1.comment.query().findById(id).update(data);
    if (!hel) {
        throw new Error("not able to update");
        return;
    }
};
exports.update = update;
//# sourceMappingURL=update.js.map