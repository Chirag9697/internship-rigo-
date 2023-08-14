"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
const objection_1 = require("objection");
class Person extends objection_1.Model {
    static get tableName() {
        return 'persons';
    }
}
exports.Person = Person;
//# sourceMappingURL=Person.js.map