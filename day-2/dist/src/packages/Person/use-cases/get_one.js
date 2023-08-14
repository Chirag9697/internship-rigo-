"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_one = void 0;
const person_1 = require("../domain/person");
const get_one = async (id) => {
    const persons = await person_1.person.query().findById(id);
    console.log(await persons);
};
exports.get_one = get_one;
//# sourceMappingURL=get_one.js.map