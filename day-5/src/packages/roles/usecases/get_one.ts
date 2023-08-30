import {role} from '../domain/role';

export const get_one=async(id:any)=>{
    const roles=await role.query().first().where('roleuser','=',id);
    // console.log(person);
    // const userone=(await person);
    console.log(roles);
    return roles;
}
