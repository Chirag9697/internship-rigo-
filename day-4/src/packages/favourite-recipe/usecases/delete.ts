import { favouriterecipe } from "../domain/favourite-recipe";

// import {user} from '../domain/user';
favouriterecipe
export const deleterecord=async(id:number)=>{
    const deleting=await favouriterecipe.query().deleteById(id);
    console.log(deleting);
    // console.log(allpersons);
}
