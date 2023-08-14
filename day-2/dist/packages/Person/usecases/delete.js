"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteperson = void 0;
const Person_1 = require("../domain/Person");
const deleteperson = async (id) => {
    const deleting = await Person_1.Person.query().deleteById(id);
    // console.log(allpersons);
};
exports.deleteperson = deleteperson;
//# sourceMappingURL=delete.js.map