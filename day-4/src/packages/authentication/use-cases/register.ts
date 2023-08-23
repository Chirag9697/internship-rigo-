import * as fromusers from '../../users';
import * as fromroles from '../../roles';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

export const register=async(data)=>{
    console.log('hello i am register');
    const {email,password,roleuser}=data;
    const data1={email:email,password:await bcrypt.hash(password,parseInt(process.env.Saltrounds))};
    const userid=await fromusers.create(data1);
    const roledata={id:userid['id'],rolename:roleuser}
    const pass=await fromroles.create(roledata);
    if(!pass){
        throw new Error('there is some error');
    }
    // return pass;
}

