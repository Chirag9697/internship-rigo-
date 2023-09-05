// import {user} from '../domain/user';
import { recipies } from "../domain/recipies";
export const deleterecord=async(id:number)=>{
    const deleting=await recipies.query().deleteById(id);
    if(!deleting){
        throw new Error("there is some error");
        return;
    }
}
