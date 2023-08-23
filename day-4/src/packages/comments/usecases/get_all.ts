// import {Recipe} from '../domain/recipe';
import { comment } from "../domain/comment";

export const get_all=async()=>{
    const allcomments=await comment.query();
    if(!allcomments){
        throw new Error("cannot get all comments");
    }
    return allcomments;
}
