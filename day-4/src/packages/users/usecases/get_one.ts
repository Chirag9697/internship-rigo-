import {user} from '../domain/user';

export const get_one=async(id:any)=>{
    const person=await user.query().first().where('id','=',id);
    return person;
}
export const get_one2=async(email:any)=>{
    const person=await user.query().first().where('email','=',email);
    return person;
}
