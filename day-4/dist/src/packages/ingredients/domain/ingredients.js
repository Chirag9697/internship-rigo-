"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ingredients = void 0;
const recipies_1 = require("../../recipies");
const objection_1 = require("objection");
class ingredients extends objection_1.Model {
    // id?:String
    // userid?:String
    static get tableName() {
        return 'ingredients';
    }
}
exports.ingredients = ingredients;
ingredients.relationMappings = {
    ingredientreciperelation: {
        relation: objection_1.Model.ManyToManyRelation,
        modelClass: recipies_1.recipies,
        join: {
            from: "ingredients.id",
            through: {
                from: "recipeingredients.ingredientid",
                to: "recipeingredients.recipeid"
            },
            to: "recipies.id"
        }
    },
};
//# sourceMappingURL=ingredients.js.map