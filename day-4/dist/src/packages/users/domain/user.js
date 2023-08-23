"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
const objection_1 = require("objection");
const role_1 = require("../../roles/domain/role");
const recipies_1 = require("../../recipies");
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
    },
    userrelation: {
        relation: objection_1.Model.HasManyRelation,
        modelClass: recipies_1.Recipe,
        join: {
            from: "users.id",
            to: "recipies.ownerid"
        }
    },
    userfavouriterelation: {
        relation: objection_1.Model.HasManyRelation,
        modelClass: user,
        join: {
            from: "users.id",
            to: "favouriterecipies.userid",
        }
    },
};
//# sourceMappingURL=user.js.map