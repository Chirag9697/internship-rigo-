"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchone = void 0;
const Person_1 = require("../domain/Person");
const fetchone = async (id) => {
    const person = await Person_1.Person.query().findById(id);
    console.log(person);
};
exports.fetchone = fetchone;
//# sourceMappingURL=get_one.js.map