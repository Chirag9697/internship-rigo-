"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.like = void 0;
const recipies_1 = require("../../recipies");
const users_1 = require("../../users");
const objection_1 = require("objection");
class like extends objection_1.Model {
    static get tableName() {
        return 'likes';
    }
}
exports.like = like;
like.relationMappings = {
    commentreciperelation: {
        relation: objection_1.Model.HasOneRelation,
        modelClass: recipies_1.Recipe,
        join: {
            from: "likes.recipeid",
            to: "recipies.id"
        }
    },
    commentuserrelation: {
        relation: objection_1.Model.HasOneRelation,
        modelClass: users_1.user,
        join: {
            from: "likes.userid",
            to: "users.id"
        }
    }
};
//# sourceMappingURL=likes.js.map