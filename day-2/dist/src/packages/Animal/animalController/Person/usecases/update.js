"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = void 0;
const Person_1 = require("../domain/Person");
const update = async (data) => {
    const newdata = { first_name: data.first_name };
    const person = await Person_1.Person.query().findById(data.idi).patch(newdata);
    // 
    //obj
    console.log(person);
};
exports.update = update;
//# sourceMappingURL=update.js.map