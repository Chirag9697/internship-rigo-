"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.likes = void 0;
const recipies_1 = require("../../recipies");
const users_1 = require("../../users");
const objection_1 = require("objection");
class likes extends objection_1.Model {
    static get tableName() {
        return 'likes';
    }
}
exports.likes = likes;
likes.relationMappings = {
    commentreciperelation: {
        relation: objection_1.Model.HasOneRelation,
        modelClass: recipies_1.recipies,
        join: {
            from: "likes.recipeid",
            to: "recipies.id"
        }
    },
    commentuserrelation: {
        relation: objection_1.Model.HasOneRelation,
        modelClass: users_1.users,
        join: {
            from: "likes.userid",
            to: "users.id"
        }
    }
};
//# sourceMappingURL=likes.js.map