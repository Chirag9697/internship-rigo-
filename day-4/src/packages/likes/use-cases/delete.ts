// import {user} from '../domain/user';
import { like } from "../domain/likes";
export const deleterecord=async(id:number)=>{
    const deleting=await like.query().deleteById(id);
    console.log(deleting);
    return deleting;
    // console.log(allpersons);
}
    