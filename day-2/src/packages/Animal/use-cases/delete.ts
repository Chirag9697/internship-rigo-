import {animal} from '../domain/animal';

export const deleterecord=async(id:number)=>{
    const deleting=await animal.query().deleteById(id);
    console.log(deleting);
    // console.log(allpersons);
}
