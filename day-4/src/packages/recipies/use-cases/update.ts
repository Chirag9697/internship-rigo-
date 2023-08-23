import { Recipe } from "../domain/recipe";
import { user } from "../../users";
export const update=async(data:Partial<Recipe>,id:number)=>{
    const hel=await Recipe.query().findById(id).patch(data);
    if(!hel){
        throw new Error('not able to update');
        return;
    }
}
