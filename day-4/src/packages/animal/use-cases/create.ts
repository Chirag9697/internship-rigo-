import { animal } from "../domain/animal";

export const create=async(data:Partial<animal>)=>{
    // console.log("create");
    const hel=await animal.query().insert(data);
    console.log(await hel);   
}
