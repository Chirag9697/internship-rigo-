import { animal } from "../domain/animal";
import { person } from "../../person";
export const create=async(data:Partial<animal>)=>{
    // console.log("create");
    const hel=await person.relatedQuery('animals').for(data.ownerid).insert(data);
    console.log(hel);   
}
