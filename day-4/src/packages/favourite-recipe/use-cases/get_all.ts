import { favouriterecipe } from "../domain/favourite-recipe";

// favouriterecipe
export const get_all=async()=>{
    const allrecipies=await favouriterecipe.query();
    console.log(allrecipies);
    // return allpersons;
    return allrecipies;
}
