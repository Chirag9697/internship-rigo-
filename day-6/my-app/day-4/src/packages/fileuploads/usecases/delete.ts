import { fileupload } from "../domain";
export const deleterecord=async(id:number)=>{
    const deleting=await fileupload.query().deleteById(id);
    console.log(deleting);
    // console.log(allpersons);
}
