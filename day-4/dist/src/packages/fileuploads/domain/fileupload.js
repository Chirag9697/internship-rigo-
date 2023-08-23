"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileupload = void 0;
const objection_1 = require("objection");
const recipies_1 = require("../../recipies");
class fileupload extends objection_1.Model {
    static get tableName() {
        return 'fileupload';
    }
}
exports.fileupload = fileupload;
fileupload.relationMappings = {
    reciperelation: {
        relation: objection_1.Model.HasOneRelation,
        modelClass: recipies_1.Recipe,
        join: {
            from: "fileupload.recipeid",
            to: "recipies.id"
        }
    }
};
//# sourceMappingURL=fileupload.js.map