// import {recipies} from '../domain/recipies';
import { ingredients } from "../domain/ingredients";
export const get_all=async()=>{
    const query=(await ingredients.query());
    console.log(query);
   if(!query){
    throw new Error("not able to get ingredients");
    return;
   }
   return query;
}

