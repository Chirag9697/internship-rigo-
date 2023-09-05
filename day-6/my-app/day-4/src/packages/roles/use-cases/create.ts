import {roles} from '../domain/roles';
import * as fromusers from '../../users';
export const create=async(data:Partial<roles>)=>{
    // console.log("create");
    // console.log(data);
    // const hel=await roles.query().insert(data);
    const newdata={rolename:data.rolename};
    const roles=await fromusers.users.relatedQuery('roles').for(data['id']).insert(newdata)
    // console.log( 
    // console.log(roles)
    return roles;
}
