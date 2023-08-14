"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.person = void 0;
const objection_1 = require("objection");
const animal_1 = require("../../animal");
class person extends objection_1.Model {
    static get tableName() {
        return 'persons';
    }
}
exports.person = person;
person.relationMappings = {
    animals: {
        relation: objection_1.Model.HasManyRelation,
        modelClass: animal_1.animal,
        join: {
            from: 'persons.id',
            to: 'animals.ownerid'
        }
    }
};
//# sourceMappingURL=person.js.map