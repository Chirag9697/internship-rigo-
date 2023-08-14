"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = void 0;
const person_1 = require("../domain/person");
const update = async (data) => {
    const newdata = { first_name: data.first_name };
    const personupdate = await person_1.person.query().findById(data.idi).patch(newdata);
    // 
    //obj
    console.log(personupdate);
};
exports.update = update;
//# sourceMappingURL=update.js.map