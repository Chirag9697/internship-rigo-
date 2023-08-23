"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = void 0;
const recipe_1 = require("../domain/recipe");
const update = async (data, id) => {
    const hel = await recipe_1.Recipe.query().findById(id).patch(data);
    // console.log("insert=",hel);
    return hel;
};
exports.update = update;
//# sourceMappingURL=update.js.map