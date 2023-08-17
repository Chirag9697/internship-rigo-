import {animal} from '../domain/animal';

export const get_one=async(id:number)=>{
    const animals=await animal.query().findById(id);
    console.log(await animals);
}
