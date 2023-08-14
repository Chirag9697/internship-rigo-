"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_all = void 0;
const person_1 = require("../domain/person");
const get_all = async () => {
    const allpersons = await person_1.person.query();
    console.log(allpersons);
    // return allpersons;
};
exports.get_all = get_all;
//# sourceMappingURL=get_all.js.map