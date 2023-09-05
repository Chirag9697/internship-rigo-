import { users } from "../../users";
import { favouriterecipies } from "../domain/favourite-recipies";
// favouriterecipe
export const update=async(data:Partial<favouriterecipies>,id:number)=>{
    const hel=await favouriterecipies.query().findById(id).patch(data);
    // console.log("insert=",hel);
    return hel;
}
