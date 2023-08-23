import { Recipe } from "../domain/recipe";
import { user } from "../../users";
import * as fromusermodel from '../../users';
import * as fromrecipemodel from '../../recipies';
export const create=async(data:Partial<Recipe>)=>{
    const{recipename,cookingtime,description,instruction,ownerid,filename}=data;
    const finduser=await fromusermodel.get_one(ownerid);
    console.log(finduser)
    if(!finduser){
        throw new Error("user not found");
    }
    const data1={recipename,cookingtime,description,instruction,ownerid,filename};
 
    const hel=await Recipe.query().insert(data);
    if(!hel){
        throw new Error('failed to insert the recipe');
    }
}
