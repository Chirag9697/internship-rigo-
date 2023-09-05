"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.role = void 0;
const objection_1 = require("objection");
const users_1 = require("../../users");
class role extends objection_1.Model {
    static get tablename() {
        return 'roles';
    }
}
exports.role = role;
role.relationMappings = {
    roles: {
        relation: objection_1.Model.BelongsToOneRelation,
        modelClass: users_1.user,
        join: {
            from: 'roles.roleuser',
            to: 'users.id',
        }
    }
};
//# sourceMappingURL=role.js.map