//lib
import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
//local
import * as fromusers from '../../users';
import * as fromroles from  '../../roles';

dotenv.config();

const app=express();
export const router=express.Router()

router.post('/register',async(req,res)=>{
    console.log("welcome to register page");
    const {email,password,roleuser}=req.body;
    const data={email:email,password:await bcrypt.hash(password,parseInt(process.env.Saltrounds))};
    const userid=await fromusers.create(data);
    const roledata={id:userid['id'],rolename:roleuser}
    const pass=await fromroles.create(roledata);
    if(!pass){
        return res.send('there is some error');
    }
    res.send("successfully registered")
})
router.get('/login',async(req,res)=>{
    const {email,password}=req.body;

    const userlogging=await fromusers.get_one2(email);
    if(!userlogging){
        return res.send("user not found");
    }  
    const check=await bcrypt.compare(password,userlogging['password']);
    if(!check){
        return res.send("password not correct")
    }
    const token=jwt.sign({email:email,password:password},process.env.PRIVATE_KEY);
    console.log(token);
    res.json({token:token});
})