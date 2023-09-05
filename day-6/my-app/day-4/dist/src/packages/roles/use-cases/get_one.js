"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_one = void 0;
const roles_1 = require("../domain/roles");
const get_one = async (id) => {
    const allroles = await roles_1.roles.query().first().where('roleuser', '=', id);
    // console.log(person);
    // const userone=(await person);
    console.log(allroles);
    return allroles;
};
exports.get_one = get_one;
//# sourceMappingURL=get_one.js.map