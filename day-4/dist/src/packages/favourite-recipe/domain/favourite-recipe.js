"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.favouriterecipe = void 0;
const objection_1 = require("objection");
// import { role } from "../../roles/domain/role";
const users_1 = require("../../users");
const recipies_1 = require("../../recipies");
class favouriterecipe extends objection_1.Model {
    static get tableName() {
        return "favouriterecipies";
    }
}
exports.favouriterecipe = favouriterecipe;
favouriterecipe.relationMappings = {
    userrelation: {
        relation: objection_1.Model.BelongsToOneRelation,
        modelClass: users_1.user,
        join: {
            from: "favouriterecipies.userid",
            to: "users.id",
        }
    },
    reciperelation: {
        relation: objection_1.Model.HasOneRelation,
        modelClass: recipies_1.Recipe,
        join: {
            from: "favouriterecipies.recipeid",
            to: "Recipe.id"
        }
    }
};
//# sourceMappingURL=favourite-recipe.js.map