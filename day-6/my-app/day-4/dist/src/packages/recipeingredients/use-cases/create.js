"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
// import { ingredients } from "../../ingredients/domain/ingredients";
const recipeingredients_1 = require("../domain/recipeingredients");
const create = async (data) => {
    const { recipeid, ingredientid } = data;
    const addedrecipeingredient = recipeingredients_1.recipeingredients.query().insert({ recipeid, ingredientid });
    if (!addedrecipeingredient) {
        throw new Error("not able to insert");
    }
    return addedrecipeingredient;
};
exports.create = create;
//# sourceMappingURL=create.js.map