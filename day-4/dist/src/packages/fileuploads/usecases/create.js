"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const domain_1 = require("../domain");
const create = async (data) => {
    // console.log("create");
    const hel = await domain_1.fileupload.query().insert(data);
    console.log("insert=", hel);
    return hel;
    // console.log(await hel);   
};
exports.create = create;
//# sourceMappingURL=create.js.map