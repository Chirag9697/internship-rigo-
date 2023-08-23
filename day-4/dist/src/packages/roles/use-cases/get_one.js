"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_one = void 0;
const role_1 = require("../domain/role");
const get_one = async (id) => {
    const roles = await role_1.role.query().first().where('roleuser', '=', id);
    // console.log(person);
    // const userone=(await person);
    console.log(roles);
    return roles;
};
exports.get_one = get_one;
//# sourceMappingURL=get_one.js.map