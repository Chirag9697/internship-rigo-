import { comments } from "../domain/comments";
export const update=async(data:Partial<comments>,id:number)=>{
    const hel=await comments.query().findById(id).update(data);
    if(!hel){
        throw new Error("not able to update");
        return;
    }
}
