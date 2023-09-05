"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const likes_1 = require("../domain/likes");
const create = async (data) => {
    const hel = await likes_1.like.query().insert(data);
    console.log("insert=", hel);
    return hel;
};
exports.create = create;
//# sourceMappingURL=create.js.map