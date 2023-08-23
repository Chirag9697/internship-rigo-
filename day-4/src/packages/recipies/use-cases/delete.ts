// import {user} from '../domain/user';
import { Recipe } from "../domain/recipe";
export const deleterecord=async(id:number)=>{
    const deleting=await Recipe.query().deleteById(id);
    if(!deleting){
        throw new Error("there is some error");
        return;
    }
}
