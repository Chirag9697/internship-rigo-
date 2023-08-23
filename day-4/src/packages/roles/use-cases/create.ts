import {role} from '../domain/role';
import * as fromusers from '../../users';
export const create=async(data:Partial<role>)=>{
    // console.log("create");
    // console.log(data);
    // const hel=await role.query().insert(data);
    const newdata={rolename:data.rolename};
    const roles=await fromusers.user.relatedQuery('roles').for(data['id']).insert(newdata)
    // console.log( 
    // console.log(roles)
    return roles;
}
