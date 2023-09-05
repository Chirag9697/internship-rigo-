"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comments = void 0;
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
        modelClass: Recipe,
        join: {
            from: "comments.recipeid",
            to: "recipies.id"
        }
    },
    commentuserrelation: {
        relation: objection_1.Model.HasOneRelation,
        modelClass: user,
        join: {
            from: "comments.userid",
            to: "users.id"
        }
    }
};
//# sourceMappingURL=comment.js.map