import { fileupload } from "../domain";
export const create=async(data:Partial<fileupload>)=>{
    // console.log("create");
    const hel=await fileupload.query().insert(data);
    console.log("insert=",hel);
    return hel;
    // console.log(await hel);   
}
