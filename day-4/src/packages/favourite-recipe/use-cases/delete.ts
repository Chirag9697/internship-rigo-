import { favouriterecipe } from "../domain/favourite-recipe";

export const deleterecord=async(id:number)=>{
    const deleting=await favouriterecipe.query().deleteById(id);
    if(!deleting){
        throw new Error("not able to delete");
    }
}
