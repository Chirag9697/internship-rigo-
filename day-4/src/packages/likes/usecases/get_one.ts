import { like } from "../domain/likes";
export const get_one=async(id:any)=>{
    const lik=await like.query().first().where('id','=',id);
    return lik;
}
