"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateperson = void 0;
const Person_1 = require("../domain/Person");
const updateperson = async (id) => {
    const person = await Person_1.Person.query().findById(id);
    console.log(person);
};
exports.updateperson = updateperson;
//# sourceMappingURL=update.js.map