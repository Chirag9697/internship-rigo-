import { favouriterecipies } from "../domain/favourite-recipies";

// favouriterecipe
export const get_all=async()=>{
    const allrecipies=await favouriterecipies.query();
    console.log(allrecipies);
    // return allpersons;
    return allrecipies;
}
