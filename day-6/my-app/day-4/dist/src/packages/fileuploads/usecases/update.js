"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = void 0;
const domain_1 = require("../domain");
const update = async (data, id) => {
    const hel = await domain_1.fileupload.query().findById(id).patch(data);
    // console.log("insert=",hel);
    return hel;
};
exports.update = update;
//# sourceMappingURL=update.js.map