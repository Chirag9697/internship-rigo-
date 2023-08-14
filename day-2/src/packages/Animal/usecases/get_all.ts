import {Animal} from '../domain/Animal';

export const get_all=async()=>{
    const allanimals=await Animal.query();
    // console.log(await allanimals);
    return allanimals;
}
