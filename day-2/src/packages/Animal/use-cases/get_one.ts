import {animal} from '../domain/animal';

export const get_one=async(id:number)=>{
    const person=await animal.query().findById(id);
    console.log(await animal);
}
