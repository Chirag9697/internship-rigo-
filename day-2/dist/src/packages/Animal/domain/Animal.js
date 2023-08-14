"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
const objection_1 = require("objection");
// import { Person } from '../../Person';
class Animal extends objection_1.Model {
    static get tableName() {
        return 'animals';
    }
}
exports.Animal = Animal;
//# sourceMappingURL=Animal.js.map