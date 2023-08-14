import {Animal} from '../domain/Animal';

export const update=async(data:Partial<Animal>)=>{
    const newdata={animalname:data.animalname}
    const person=await Animal.query().findById(data.idi).patch(newdata);
    // 
    //obj
    console.log(person);
}
