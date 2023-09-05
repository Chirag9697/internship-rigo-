import { fileupload } from "../domain";
export const update=async(data:Partial<fileupload>,id:number)=>{
    const hel=await fileupload.query().findById(id).patch(data);
    // console.log("insert=",hel);
    return hel;
}
