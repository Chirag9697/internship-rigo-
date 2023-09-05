// import { ingredients } from "../../ingredients/domain/ingredients";
import { recipeingredients } from "../domain/recipeingredients";

export const create=async(data:Partial<recipeingredients>)=>{
    const{recipeid,ingredientid}=data;
    const addedrecipeingredient=recipeingredients.query().insert({recipeid,ingredientid});
    if(!addedrecipeingredient){
        throw new Error("not able to insert");
    }
    return addedrecipeingredient;
}
