import { favouriterecipies } from "../domain/favourite-recipies";

// favouriterecipe
export const get_all=async(userid:any)=>{
    const allrecipies=await favouriterecipies.query().where('userid','=',`${userid}`);
    console.log(allrecipies);
    // return allpersons;
    return allrecipies;
}
