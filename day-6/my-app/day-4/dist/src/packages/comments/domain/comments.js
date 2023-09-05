"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comments = void 0;
const recipies_1 = require("../../recipies");
const users_1 = require("../../users");
const objection_1 = require("objection");
class comments extends objection_1.Model {
    static get tableName() {
        return 'comments';
    }
}
exports.comments = comments;
comments.relationMappings = {
    commentreciperelation: {
        relation: objection_1.Model.HasOneRelation,
        modelClass: recipies_1.recipies,
        join: {
            from: "comments.recipeid",
            to: "recipies.id"
        }
    },
    commentuserrelation: {
        relation: objection_1.Model.HasOneRelation,
        modelClass: users_1.users,
        join: {
            from: "comments.userid",
            to: "users.id"
        }
    }
};
//# sourceMappingURL=comments.js.map