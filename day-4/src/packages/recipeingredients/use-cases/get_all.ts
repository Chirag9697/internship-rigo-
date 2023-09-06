// import {Recipe} from '../domain/recipe';
import { recipeingredients } from "../domain/recipeingredients";
export const get_all=async(recipeid)=>{
    const allrecipeingredients=await recipeingredients.query().where('recipeid','=',recipeid);
    // console.log(all);
    return allrecipeingredients;
}
