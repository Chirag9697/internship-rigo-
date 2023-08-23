import { user } from "../../users";
import { favouriterecipe } from "../domain/favourite-recipe";
// favouriterecipe
export const update=async(data:Partial<favouriterecipe>,id:number)=>{
    const hel=await favouriterecipe.query().findById(id).patch(data);
    // console.log("insert=",hel);
    return hel;
}
