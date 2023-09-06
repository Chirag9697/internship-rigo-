import { recipies } from "../domain/recipies";
import { users } from "../../users";
import * as fromusermodel from '../../users';
import * as fromrecipemodel from '../../recipies';
import * as fromrecipeingredientmodel from '../../recipeingredients';
export const create=async(data:Partial<recipies>)=>{
    const{recipename,cookingtime,description,instruction,ownerid,filename}=data;
    const ingredients=JSON.parse(data.ingredients);
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
    // console.log("ingredientsfrom create",ingredients);

    // console.log("ing length",JSON.parse(ingredients).length);
    for(var i=1;i<ingredients.length;i++){
        const addingred=fromrecipeingredientmodel.create({ingredientid:ingredients[i].id,recipeid:hel['id'],quantity:`${ingredients[i].quantity+ingredients[i].size}`})
        console.log("adding ingredients",addingred);
        if(!addingred){
            throw new Error("not able to insert into ingredient");
        }      
    }
 
    return  hel;
}
