// import {Recipe} from '../domain/recipe';
import { comments } from "../domain/comments";
import * as fromusermodel from "../../users";
export const get_all=async(id)=>{
    const allcomments=await comments.query().where('recipeid','=',`${id}`);
    if(!allcomments){
        throw new Error("cannot get all comments");
    }
    var allcomm=[];
    for(var i=0;i<allcomments.length;i++){
        const user=await fromusermodel.get_one(allcomments[i].userid);
        allcomm.push({...allcomments[i],commentowner:user.name});
    }
    return allcomm;
}
