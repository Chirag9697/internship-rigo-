import {user} from '../domain/user';

export const create=async(data:Partial<user>)=>{
    // console.log("create");
    const hel=await user.query().insert(data);
    console.log("insert=",hel);
    return hel;
    // console.log(await hel);   
}
