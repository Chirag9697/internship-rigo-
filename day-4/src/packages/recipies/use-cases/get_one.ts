import { recipies } from "../domain/recipies";
export const get_one=async(id:any)=>{
    const recipe=await recipies.query().first().where('id','=',id);
    return recipe;
}
