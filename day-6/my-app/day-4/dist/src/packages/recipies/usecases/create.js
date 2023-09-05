"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const recipe_1 = require("../domain/recipe");
const create = async (data) => {
    const hel = await recipe_1.Recipe.query().insert(data);
    // console.log("insert=",hel);
    return hel;
};
exports.create = create;
//# sourceMappingURL=create.js.map