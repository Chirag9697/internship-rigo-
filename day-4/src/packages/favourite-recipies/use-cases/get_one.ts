import { favouriterecipies } from "../domain/favourite-recipies";

// favouriterecipe
export const get_one=async(id:any)=>{
    const recipe=await favouriterecipies.query().first().where('id','=',id);
    return recipe;
}
