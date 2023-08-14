import {person} from '../domain/person';

export const create=async(data:Partial<person>)=>{
    // console.log("create");
    const hel=await person.query().insert(data);
    console.log(await hel);   
}
