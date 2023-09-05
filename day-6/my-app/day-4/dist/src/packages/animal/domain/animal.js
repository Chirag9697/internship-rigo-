"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.animal = void 0;
//lib
const objection_1 = require("objection");
class animal extends objection_1.Model {
    static get tableName() {
        return 'animals';
    }
}
exports.animal = animal;
//# sourceMappingURL=animal.js.map