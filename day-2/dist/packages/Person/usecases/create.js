"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const Person_1 = require("../domain/Person");
const create = async (data) => {
    await Person_1.Person.query().insert(data);
};
exports.create = create;
//# sourceMappingURL=create.js.map