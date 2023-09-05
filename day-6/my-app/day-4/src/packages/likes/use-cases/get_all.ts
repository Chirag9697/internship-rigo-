// import {Recipe} from '../domain/recipe';
import { likes } from "../domain/likes";

export const get_all=async()=>{
    const allikes=await likes.query();
    console.log(allikes);
    return allikes;
}
