import {Person} from '../domain/Person';

export const update=async(data:Partial<Person>)=>{
    const newdata={first_name:data.first_name}
    const person=await Person.query().findById(data.idi).patch(newdata);
    // 
    //obj
    console.log(person);
}
