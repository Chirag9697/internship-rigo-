import {person} from '../domain/person';

export const get_all=async()=>{
    const allpersons=await person.query();
    console.log(allpersons);
    // return allpersons;
}
