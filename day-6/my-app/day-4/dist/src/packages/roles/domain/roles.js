"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roles = void 0;
const objection_1 = require("objection");
const users_1 = require("../../users");
class roles extends objection_1.Model {
    static get tableName() {
        return 'roles';
    }
}
exports.roles = roles;
roles.relationMappings = {
    roles: {
        relation: objection_1.Model.BelongsToOneRelation,
        modelClass: users_1.users,
        join: {
            from: 'roles.roleuser',
            to: 'users.id',
        }
    }
};
//# sourceMappingURL=roles.js.map