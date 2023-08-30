"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
const objection_1 = require("objection");
// import { role } from "../../roles/domain/role";
class user extends objection_1.Model {
    static get tableName() {
        return 'users';
    }
}
exports.user = user;
//# sourceMappingURL=user.js.map