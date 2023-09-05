// import { ingredients } from "../../ingredients/domain/ingredients";
import { recipeingredients } from "../domain/recipeingredients";

export const deleterec=async(data:Partial<recipeingredients>)=>{
    // const{recipeid,ingredientid}=data;
    const deleterecipeingredient=recipeingredients.query().deleteById(data.recipeid);
    if(!deleterecipeingredient){
        throw new Error("not able to delete");
    }
    // return addedrecipeingredient;
}
