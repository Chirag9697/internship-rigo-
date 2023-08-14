import { Animal } from "../domain/Animal";
import { Person } from "../../Person";
export const create=async(data:Partial<Animal>)=>{
    // console.log("create");
    const hel=await Person.relatedQuery('animals').for(data.ownerid).insert(data);
    console.log(hel);   
}
