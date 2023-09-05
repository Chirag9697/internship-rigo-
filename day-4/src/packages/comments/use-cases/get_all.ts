// import {Recipe} from '../domain/recipe';
import { comments } from "../domain/comments";

export const get_all=async(id)=>{
    const allcomments=await comments.query().where('recipeid','=',`${id}`);
    if(!allcomments){
        throw new Error("cannot get all comments");
    }
    return allcomments;
}
