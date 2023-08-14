import {person} from '../domain/person';

export const deleterecord=async(id:number)=>{
    const deleting=await person.query().deleteById(id);
    console.log(deleting);
    // console.log(allpersons);
}
