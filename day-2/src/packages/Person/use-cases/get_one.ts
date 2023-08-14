import {person} from '../domain/person';

export const get_one=async(id:number)=>{
    const persons=await person.query().findById(id);
    console.log(await persons);
}
