// import {Recipe} from '../domain/recipe';
import { like } from "../domain/likes";

export const get_all=async()=>{
    const allikes=await like.query();
    console.log(allikes);
    return allikes;
}
