"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
const objection_1 = require("objection");
const Animal_1 = require("../../Animal");
class Person extends objection_1.Model {
    static get tableName() {
        return 'persons';
    }
}
exports.Person = Person;
Person.relationMappings = {
    animals: {
        relation: objection_1.Model.HasManyRelation,
        modelClass: Animal_1.Animal,
        join: {
            from: 'persons.id',
            to: 'animals.ownerid'
        }
    }
};
//# sourceMappingURL=Person.js.map