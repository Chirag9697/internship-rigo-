"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recipeingredients = void 0;
const objection_1 = require("objection");
class recipeingredients extends objection_1.Model {
    // id?:String
    // userid?:String
    static get tableName() {
        return 'recipeingredients';
    }
}
exports.recipeingredients = recipeingredients;
//# sourceMappingURL=recipeingredients.js.map