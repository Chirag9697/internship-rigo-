"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleterec = void 0;
// import { ingredients } from "../../ingredients/domain/ingredients";
const recipeingredients_1 = require("../domain/recipeingredients");
const deleterec = async (data) => {
    // const{recipeid,ingredientid}=data;
    const deleterecipeingredient = recipeingredients_1.recipeingredients.query().deleteById(data.recipeid);
    if (!deleterecipeingredient) {
        throw new Error("not able to delete");
    }
    // return addedrecipeingredient;
};
exports.deleterec = deleterec;
//# sourceMappingURL=deleterec.js.map