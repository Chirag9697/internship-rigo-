"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.favouriterecipies = void 0;
const objection_1 = require("objection");
// import { role } from "../../roles/domain/role";
const users_1 = require("../../users");
const recipies_1 = require("../../recipies");
class favouriterecipies extends objection_1.Model {
    static get tableName() {
        return "favouriterecipies";
    }
}
exports.favouriterecipies = favouriterecipies;
favouriterecipies.relationMappings = {
    userrelation: {
        relation: objection_1.Model.BelongsToOneRelation,
        modelClass: users_1.users,
        join: {
            from: "favouriterecipies.userid",
            to: "users.id",
        }
    },
    reciperelation: {
        relation: objection_1.Model.HasOneRelation,
        modelClass: recipies_1.recipies,
        join: {
            from: "favouriterecipies.recipeid",
            to: "Recipe.id"
        }
    }
};
//# sourceMappingURL=favourite-recipies.js.map