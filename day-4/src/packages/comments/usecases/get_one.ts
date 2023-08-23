import { comment } from "../domain/comment";
export const get_one=async(id:any)=>{
    const comm=await comment.query().first().where('id','=',id);
    return comm;
}
