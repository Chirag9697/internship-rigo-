"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_one2 = exports.get_one = void 0;
const user_1 = require("../domain/user");
const get_one = async (id) => {
    const person = await user_1.user.query().first().where('id', '=', id);
    return person;
};
exports.get_one = get_one;
const get_one2 = async (email) => {
    const person = await user_1.user.query().first().where('email', '=', email);
    return person;
};
exports.get_one2 = get_one2;
//# sourceMappingURL=get_one.js.map