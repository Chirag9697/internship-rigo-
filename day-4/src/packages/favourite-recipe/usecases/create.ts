import { favouriterecipe } from "../domain/favourite-recipe";
import { user } from "../../users";
export const create=async(data:Partial<favouriterecipe>)=>{
    const hel=await favouriterecipe.query().insert(data);
    // console.log("insert=",hel);
    return hel;
}
