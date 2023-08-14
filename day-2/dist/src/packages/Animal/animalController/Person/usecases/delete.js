"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleterecord = void 0;
const Person_1 = require("../domain/Person");
const deleterecord = async (id) => {
    const deleting = await Person_1.Person.query().deleteById(id);
    console.log(deleting);
    // console.log(allpersons);
};
exports.deleterecord = deleterecord;
//# sourceMappingURL=delete.js.map