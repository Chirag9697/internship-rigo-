"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createA = void 0;
const Person_1 = require("../../Person");
const createA = async (data) => {
    // console.log("create");
    const hel = await Person_1.Person.relatedQuery('animals').for(18).insert(data);
    console.log(hel);
};
exports.createA = createA;
//# sourceMappingURL=createA.js.map