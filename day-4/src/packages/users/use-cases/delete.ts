import {user} from '../domain/user';

export const deleterecord=async(id:number)=>{
    const deleting=await user.query().deleteById(id);
    console.log(deleting);
    // console.log(allpersons);
}
