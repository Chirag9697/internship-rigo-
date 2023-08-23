"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recipe = void 0;
const objection_1 = require("objection");
// import { role } from "../../roles/domain/role";
const users_1 = require("../../users");
const fileupload_1 = require("../../fileuploads/domain/fileupload");
class Recipe extends objection_1.Model {
    static get tableName() {
        return "recipies";
    }
}
exports.Recipe = Recipe;
Recipe.relationMappings = {
    userrelation: {
        relation: objection_1.Model.BelongsToOneRelation,
        modelClass: users_1.user,
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
    }
};
//# sourceMappingURL=recipe.js.map