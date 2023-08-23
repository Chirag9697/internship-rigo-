"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_one = void 0;
const likes_1 = require("../domain/likes");
const get_one = async (id) => {
    const lik = await likes_1.like.query().first().where('id', '=', id);
    return lik;
};
exports.get_one = get_one;
//# sourceMappingURL=get_one.js.map