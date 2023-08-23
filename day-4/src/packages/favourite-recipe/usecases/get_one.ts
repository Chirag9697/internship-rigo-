import { favouriterecipe } from "../domain/favourite-recipe";

// favouriterecipe
export const get_one=async(id:any)=>{
    const recipe=await favouriterecipe.query().first().where('id','=',id);
    return recipe;
}
