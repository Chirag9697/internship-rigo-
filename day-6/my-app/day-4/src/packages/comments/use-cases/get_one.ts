import { comments } from "../domain/comments";
export const get_one=async(id:any)=>{
    const comm=await comments.query().first().where('id','=',id);
    return comm;
}
