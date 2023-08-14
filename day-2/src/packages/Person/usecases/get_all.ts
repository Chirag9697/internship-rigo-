import {Person} from '../domain/Person';

export const get_all=async()=>{
    const allpersons=await Person.query();
    console.log(allpersons);
    // return allpersons;
}
