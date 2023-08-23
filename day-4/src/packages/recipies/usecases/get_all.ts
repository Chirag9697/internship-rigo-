import {Recipe} from '../domain/recipe';

export const get_all=async()=>{
    const allrecipies=await Recipe.query();
    console.log(allrecipies);
    // return allpersons;
    return allrecipies;
}
