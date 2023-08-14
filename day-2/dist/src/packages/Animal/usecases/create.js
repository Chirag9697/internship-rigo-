"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const Person_1 = require("../../Person");
const create = async (data) => {
    // console.log("create");
    const hel = await Person_1.Person.relatedQuery('animals').for(data.ownerid).insert(data);
    console.log(hel);
};
exports.create = create;
//# sourceMappingURL=create.js.map