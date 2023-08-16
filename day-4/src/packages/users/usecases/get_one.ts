import {user} from '../domain/user';

export const get_one=async(email:any)=>{
    const person=await user.query().first().where('email','=',email);
    // console.log(person);
    // const userone=(await person);
    console.log(person);
    return person;
}
