import {Person} from '../domain/Person';

export const deleterecord=async(id:number)=>{
    const deleting=await Person.query().deleteById(id);
    console.log(deleting);
    // console.log(allpersons);
}
