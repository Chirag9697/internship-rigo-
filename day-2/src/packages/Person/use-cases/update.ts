import {person} from '../domain/person';

export const update=async(data:Partial<person>)=>{
    const newdata={first_name:data.first_name}
    const personupdate=await person.query().findById(data.idi).patch(newdata);
    // 
    //obj
    console.log(personupdate);
}
