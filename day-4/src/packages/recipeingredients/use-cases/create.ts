// import { ingredients } from "../../ingredients/domain/ingredients";
import { recipeingredients } from "../domain/recipeingredients";

export const create=async(data:Partial<recipeingredients>)=>{
    const{recipeid,ingredientid,quantity}=data;
    const addedrecipeingredient=await recipeingredients.query().insert({recipeid,ingredientid,quantity});
    if(!addedrecipeingredient){
        throw new Error("not able to insert");
    }
    return addedrecipeingredient
}
