"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_one = void 0;
const Person_1 = require("../domain/Person");
const get_one = async (id) => {
    const person = await Person_1.Person.query().findById(id);
    console.log(person);
};
exports.get_one = get_one;
//# sourceMappingURL=get_one.js.map