import {Person} from '../domain/Person';

export const get_one=async(id:number)=>{
    const person=await Person.query().findById(id);
    console.log(await person);
}
