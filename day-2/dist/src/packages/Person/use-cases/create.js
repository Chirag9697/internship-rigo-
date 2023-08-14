"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const person_1 = require("../domain/person");
const create = async (data) => {
    // console.log("create");
    const hel = await person_1.person.query().insert(data);
    console.log(await hel);
};
exports.create = create;
//# sourceMappingURL=create.js.map