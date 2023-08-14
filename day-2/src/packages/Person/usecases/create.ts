import {Person} from '../domain/Person';

export const create=async(data:Partial<Person>)=>{
    // console.log("create");
    const hel=await Person.query().insert(data);
    console.log(hel);   
}
