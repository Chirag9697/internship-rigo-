// import {Recipe} from '../domain/recipe';
import { comments } from "../domain/comments";

export const get_all=async()=>{
    const allcomments=await comments.query();
    if(!allcomments){
        throw new Error("cannot get all comments");
    }
    return allcomments;
}
