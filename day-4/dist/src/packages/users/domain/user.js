"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
const objection_1 = require("objection");
const role_1 = require("../../roles/domain/role");
class user extends objection_1.Model {
    static get tableName() {
        return 'users';
    }
}
exports.user = user;
user.relationMappings = {
    roles: {
        relation: objection_1.Model.HasManyRelation,
        modelClass: role_1.role,
        join: {
            from: 'users.id',
            to: 'roles.roleuser'
        }
    }
};
//# sourceMappingURL=user.js.map