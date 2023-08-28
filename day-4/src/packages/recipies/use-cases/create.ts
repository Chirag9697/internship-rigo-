import { recipies } from "../domain/recipies";
import { users } from "../../users";
import * as fromusermodel from '../../users';
import * as fromrecipemodel from '../../recipies';
export const create=async(data:Partial<recipies>)=>{
    const{recipename,cookingtime,description,instruction,ownerid,filename}=data;
    const finduser=await fromusermodel.get_one(ownerid);
    console.log(finduser)
    if(!finduser){
        throw new Error("users not found");
    }
    const data1={recipename,cookingtime,description,instruction,ownerid,filename};
 
    const hel=await recipies.query().insert(data);
    if(!hel){
        throw new Error('failed to insert the recipe');
    }
    return  hel;
}
