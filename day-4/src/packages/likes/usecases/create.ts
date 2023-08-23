import { Recipe } from "../../recipies";
import { user } from "../../users";
import { like } from "../domain/likes";
export const create=async(data:Partial<like>)=>{
    const hel=await like.query().insert(data);
    console.log("insert=",hel);
    return hel;
}
