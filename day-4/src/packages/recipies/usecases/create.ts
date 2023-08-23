import { Recipe } from "../domain/recipe";
import { user } from "../../users";
export const create=async(data:Partial<Recipe>)=>{
    const hel=await Recipe.query().insert(data);
    // console.log("insert=",hel);
    return hel;
}
