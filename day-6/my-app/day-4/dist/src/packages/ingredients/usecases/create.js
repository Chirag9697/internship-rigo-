"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const ingredients_1 = require("../domain/ingredients");
const create = async (data) => {
    // const{recipeid,ingredientid}=data;
    const addedrecipeingredient = ingredients_1.ingredients.query().insert({ ingredientname: data.ingredientname });
    if (!addedrecipeingredient) {
        throw new Error("not able to insert");
    }
    return addedrecipeingredient;
};
exports.create = create;
//# sourceMappingURL=create.js.map