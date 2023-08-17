import {animal} from '../domain/animal';

export const update=async(data:Partial<animal>)=>{
    const newdata={animalname:data.animalname}
    const animalupdate=await animal.query().findById(data.idi).patch(newdata);
    // 
    //obj
    console.log(animalupdate);
}
