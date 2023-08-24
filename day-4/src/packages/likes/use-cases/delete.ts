// import {user} from '../domain/user';
import { likes } from "../domain/likes";
export const deleterecord=async(id:number)=>{
    const deleting=await likes.query().deleteById(id);
    console.log(deleting);
    if(!deleting){
        throw new Error("not able to delete");
        return;
    }
    // return deleting;
    // console.log(allpersons);
}
    