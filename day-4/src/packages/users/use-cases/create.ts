import {users} from '../domain/users';

export const create=async(data:Partial<users>)=>{
    // console.log("create");
    const hel=await users.query().insert(data);
    console.log("insert=",hel);
    return hel;
    // console.log(await hel);   
}
