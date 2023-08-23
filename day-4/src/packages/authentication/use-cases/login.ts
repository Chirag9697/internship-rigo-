import * as fromusers from '../../users';
import * as fromroles from '../../roles';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

export const login=async(data)=>{
    console.log("login")
    const{email,password}=data;
    // console.log(email,password);
    const userlogging=await fromusers.get_one2(email);
    // console.log(userlogging);
    if(!userlogging){
        throw new Error("user not found"); 
        return;       
    }  
    const check=await bcrypt.compare(password,userlogging['password']);
    // console.log(check);
    if(!check){
        throw new Error("password is not correct");
        return;
    }
    const token=jwt.sign({email:email,password:password},process.env.PRIVATE_KEY);
    // console.log(token);
    console.log(token);
    const result={token:token};
    return result;
}

