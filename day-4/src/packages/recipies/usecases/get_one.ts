import { Recipe } from "../domain/recipe";
export const get_one=async(id:any)=>{
    const recipe=await Recipe.query().first().where('id','=',id);
    return recipe;
}
