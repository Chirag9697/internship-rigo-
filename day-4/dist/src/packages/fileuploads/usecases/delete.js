"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleterecord = void 0;
const domain_1 = require("../domain");
const deleterecord = async (id) => {
    const deleting = await domain_1.fileupload.query().deleteById(id);
    console.log(deleting);
    // console.log(allpersons);
};
exports.deleterecord = deleterecord;
//# sourceMappingURL=delete.js.map