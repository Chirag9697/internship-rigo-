"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const user_1 = require("../domain/user");
const create = async (data) => {
    // console.log("create");
    const hel = await user_1.user.query().insert(data);
    console.log("insert=", hel);
    return hel;
    // console.log(await hel);   
};
exports.create = create;
//# sourceMappingURL=create.js.map