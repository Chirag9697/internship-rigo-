import {roles} from '../domain/roles';

export const get_one=async(id:any)=>{
    const allroles=await roles.query().first().where('roleuser','=',id);
    // console.log(person);
    // const userone=(await person);
    console.log(allroles);
    return allroles;
}
