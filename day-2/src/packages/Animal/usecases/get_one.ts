import {Animal} from '../domain/Animal';

export const get_one=async(id:number)=>{
    const person=await Animal.query().findById(id);
    console.log(await Animal);
}
