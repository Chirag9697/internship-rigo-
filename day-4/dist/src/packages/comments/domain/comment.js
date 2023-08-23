"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comment = void 0;
const recipies_1 = require("../../recipies");
const users_1 = require("../../users");
const objection_1 = require("objection");
class comment extends objection_1.Model {
    static get tableName() {
        return 'comments';
    }
}
exports.comment = comment;
comment.relationMappings = {
    commentreciperelation: {
        relation: objection_1.Model.HasOneRelation,
        modelClass: recipies_1.Recipe,
        join: {
            from: "comments.recipeid",
            to: "recipies.id"
        }
    },
    commentuserrelation: {
        relation: objection_1.Model.HasOneRelation,
        modelClass: users_1.user,
        join: {
            from: "comments.userid",
            to: "users.id"
        }
    }
};
//# sourceMappingURL=comment.js.map