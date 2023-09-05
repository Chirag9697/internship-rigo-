import { recipies } from "../domain/recipies";
import { users } from "../../users";
import { recipeingredients } from "../../recipeingredients";
import * as fromrecipeingredientmodel from "../../recipeingredients";
export const update = async (data: Partial<recipies>, id: number) => {
    const { recipename, cookingtime, description, instruction, ownerid, filename, ingredients } = data;
    const data1 = { recipename, cookingtime, description, instruction, ownerid, filename };
    const hel = await recipies.query().findById(id).patch(data1);
    console.log("updated recipies",hel);
    if (!hel) {
        // return  hel;
        throw new Error('not able to update');
        return;
    }
    await fromrecipeingredientmodel.deleterec({ recipeid: hel['id'] });
    for (var i = 0; i < ingredients.length; i++) {
        const addingred = fromrecipeingredientmodel.create({ ingredientid: ingredients[i].ingredientid, recipeid: hel['id'] })
        if (!addingred) {
            throw new Error("not able to insert into ingredient");
        }
    }

}
