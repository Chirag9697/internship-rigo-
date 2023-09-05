import { recipies } from "../domain/recipies";
import { users } from "../../users";
import * as fromusermodel from '../../users';
import * as fromrecipemodel from '../../recipies';
import * as fromrecipeingredientmodel from '../../recipeingredients';
export const create=async(data:Partial<recipies>)=>{
    const{recipename,cookingtime,description,instruction,ownerid,filename,ingredients}=data;

    const finduser=await fromusermodel.get_one(ownerid);
    console.log(finduser)
    if(!finduser){
        throw new Error("users not found");
    }
    const data1={recipename,cookingtime,description,instruction,ownerid,filename};
    
    const hel=await recipies.query().first().insert(data1);
    if(!hel){
        throw new Error('failed to insert the recipe');
    }
    for(var i=0;i<ingredients.length;i++){
        const addingred=fromrecipeingredientmodel.create({ingredientid:ingredients[i].ingredientid,recipeid:hel['id']})
        if(!addingred){
            throw new Error("not able to insert into ingredient");
        }      
    }
 
    return  hel;
}
