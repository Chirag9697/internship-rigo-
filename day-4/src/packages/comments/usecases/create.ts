import { Recipe } from "../../recipies";
import { user } from "../../users";
import { comment } from "../domain/comment";
export const create=async(data:Partial<comment>)=>{
    const hel=await comment.query().insert(data);
    console.log("insert=",hel);
    return hel;
}
