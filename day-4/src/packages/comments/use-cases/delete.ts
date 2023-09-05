// import {user} from '../domain/user';
import { comments } from "../domain/comments";
export const deleterecord=async(id:number)=>{
    const deleting=await comments.query().deleteById(id);
    // console.log(deleting);]
    if(!deleting){
        throw new Error("not able to delete");
    }
    // return deleting;
    // console.log(allpersons);
}
export const deletewithrecipeid=async(recipeid:any)=>{
    const deleting=await comments.query().delete().where('recipeid','=',`${recipeid}`);
    // if(!deleting){
        // throw new Error("not able to delete");
    // }
}
    