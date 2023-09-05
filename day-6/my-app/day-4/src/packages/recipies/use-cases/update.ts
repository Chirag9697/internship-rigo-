import { recipies } from "../domain/recipies";
import { users } from "../../users";
export const update=async(data:Partial<recipies>,id:number)=>{
    const hel=await recipies.query().findById(id).patch(data);
    if(!hel){
        throw new Error('not able to update');
        return;
    }
}
