import {animal} from '../domain/animal';

export const get_all=async()=>{
    const allanimals=await animal.query();
    console.log(await allanimals);
    // return await allanimals;
    
}
