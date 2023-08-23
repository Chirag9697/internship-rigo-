// import {user} from '../domain/user';
import { comment } from "../domain/comment";
export const deleterecord=async(id:number)=>{
    const deleting=await comment.query().deleteById(id);
    console.log(deleting);
    return deleting;
    // console.log(allpersons);
}
    