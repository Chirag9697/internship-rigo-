"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_one = void 0;
const user_1 = require("../domain/user");
const get_one = async (email) => {
    const person = await user_1.user.query().first().where('email', '=', email);
    // console.log(person);
    // const userone=(await person);
    console.log(person);
    return person;
};
exports.get_one = get_one;
//# sourceMappingURL=get_one.js.map