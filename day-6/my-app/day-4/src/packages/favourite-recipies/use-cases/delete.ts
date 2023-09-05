import { favouriterecipies } from "../domain/favourite-recipies";

export const deleterecord=async(id:number)=>{
    const deleting=await favouriterecipies.query().deleteById(id);
    if(!deleting){
        throw new Error("not able to delete");
    }
}
