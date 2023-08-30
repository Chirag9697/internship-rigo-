"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_all = void 0;
const user_1 = require("../domain/user");
const get_all = async () => {
    const allpersons = await user_1.user.query();
    console.log(allpersons);
    // return allpersons;
};
exports.get_all = get_all;
//# sourceMappingURL=get_all.js.map