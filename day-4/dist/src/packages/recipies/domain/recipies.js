"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recipies = void 0;
const objection_1 = require("objection");
// import { role } from "../../roles/domain/role";
const users_1 = require("../../users");
const fileupload_1 = require("../../fileuploads/domain/fileupload");
const favourite_recipies_1 = require("../../favourite-recipies");
const ingredients_1 = require("../../ingredients/domain/ingredients");
const likes_1 = require("../../likes");
class recipies extends objection_1.Model {
    // nooflikes?:any
    static get tableName() {
        return "recipies";
    }
}
exports.recipies = recipies;
recipies.relationMappings = {
    userrelation: {
        relation: objection_1.Model.BelongsToOneRelation,
        modelClass: users_1.users,
        join: {
            from: "recipies.ownerid",
            to: "users.id",
        }
    },
    fileuploadrelation: {
        relation: objection_1.Model.HasManyRelation,
        modelClass: fileupload_1.fileupload,
        join: {
            from: "recipies.id",
            to: "fileupload.recipeid"
        }
    },
    favouritereciperelation: {
        relation: objection_1.Model.HasManyRelation,
        modelClass: favourite_recipies_1.favouriterecipies,
        join: {
            from: "recipeies.id",
            to: "favouriterecipies.recipeid",
        }
    },
    ingredientreciperelation: {
        relation: objection_1.Model.ManyToManyRelation,
        modelClass: ingredients_1.ingredients,
        join: {
            from: "recipies.id",
            through: {
                from: "recipeingredients.recipeid",
                to: "recipeingredients.ingredientid"
            },
            to: "ingredients.id",
        }
    },
    likerelation: {
        relation: objection_1.Model.HasOneRelation,
        modelClass: likes_1.likes,
        join: {
            from: "recipies.id",
            to: "likes.recipeid"
        }
    }
};
//# sourceMappingURL=recipies.js.map