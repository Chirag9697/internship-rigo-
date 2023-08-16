import {user} from '../domain/user';

export const get_all=async()=>{
    const allpersons=await user.query();
    console.log(allpersons);
    // return allpersons;
}
