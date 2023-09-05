import { ingredients } from "../domain/ingredients";
export const create=async(data:Partial<ingredients>)=>{
    // const{recipeid,ingredientid}=data;
    const addedrecipeingredient=ingredients.query().insert({ingredientname:data.ingredientname});
    if(!addedrecipeingredient){
        throw new Error("not able to insert");
    }
    return addedrecipeingredient;
}
