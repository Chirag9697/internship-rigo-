"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchall = void 0;
const Person_1 = require("../domain/Person");
const fetchall = async () => {
    const allpersons = await Person_1.Person.query();
    return allpersons;
};
exports.fetchall = fetchall;
//# sourceMappingURL=get_all.js.map