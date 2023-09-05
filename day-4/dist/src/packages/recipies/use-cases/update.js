"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = void 0;
const recipies_1 = require("../domain/recipies");
const fromrecipeingredientmodel = __importStar(require("../../recipeingredients"));
const update = async (data, id) => {
    const { recipename, cookingtime, description, instruction, ownerid, filename, ingredients } = data;
    const data1 = { recipename, cookingtime, description, instruction, ownerid, filename };
    const hel = await recipies_1.recipies.query().findById(id).patch(data1);
    console.log("updated recipies", hel);
    if (!hel) {
        // return  hel;
        throw new Error('not able to update');
        return;
    }
    await fromrecipeingredientmodel.deleterec({ recipeid: hel['id'] });
    for (var i = 0; i < ingredients.length; i++) {
        const addingred = fromrecipeingredientmodel.create({ ingredientid: ingredients[i].ingredientid, recipeid: hel['id'] });
        if (!addingred) {
            throw new Error("not able to insert into ingredient");
        }
    }
};
exports.update = update;
//# sourceMappingURL=update.js.map