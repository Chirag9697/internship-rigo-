import { comment } from "../domain/comment";
export const update=async(data:Partial<comment>,id:number)=>{
    const hel=await comment.query().findById(id).update(data);
    console.log("insert=",hel);
    return hel;
}
