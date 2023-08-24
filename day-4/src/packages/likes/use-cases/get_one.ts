import { likes } from "../domain/likes";
export const get_one=async(id:any)=>{
    const lik=await likes.query().first().where('id','=',id);
    return lik;
}
