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
exports.create = void 0;
const recipies_1 = require("../domain/recipies");
const fromusermodel = __importStar(require("../../users"));
const fromrecipeingredientmodel = __importStar(require("../../recipeingredients"));
const create = async (data) => {
    const { recipename, cookingtime, description, instruction, ownerid, filename, ingredients } = data;
    const finduser = await fromusermodel.get_one(ownerid);
    console.log(finduser);
    if (!finduser) {
        throw new Error("users not found");
    }
    const data1 = { recipename, cookingtime, description, instruction, ownerid, filename };
    const hel = await recipies_1.recipies.query().first().insert(data1);
    if (!hel) {
        throw new Error('failed to insert the recipe');
    }
    for (var i = 0; i < ingredients.length; i++) {
        const addingred = fromrecipeingredientmodel.create({ ingredientid: ingredients[i].ingredientid, recipeid: hel['id'] });
        if (!addingred) {
            throw new Error("not able to insert into ingredient");
        }
    }
    return hel;
};
exports.create = create;
//# sourceMappingURL=create.js.map