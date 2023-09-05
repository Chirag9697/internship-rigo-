// import {user} from '../domain/user';
import { likes } from "../domain/likes";
export const deleterecord=async(recipeid,userid)=>{
    console.log('deleting');
    const deleting=await likes.query().delete().where('recipeid','=',`${recipeid}`).andWhere('userid','=',`${userid}`);
    console.log("deleting",deleting);
    if(!deleting){
        throw new Error("not able to delete");
        return;
    }
    // return deleting;
    // console.log(allpersons);
}
    