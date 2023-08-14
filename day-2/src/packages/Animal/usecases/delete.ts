import {Animal} from '../domain/Animal';

export const deleterecord=async(id:number)=>{
    const deleting=await Animal.query().deleteById(id);
    console.log(deleting);
    // console.log(allpersons);
}
