//lib
import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
//local
import * as fromusers from '../../users';
import * as fromroles from  '../../roles';
import * as fromauth from '../../authentication';

dotenv.config();

const app=express();
export const router=express.Router()


router.post('/register',async(req,res)=>{
    const {email,password,roleuser}=req.body;
    const data1={email,password,roleuser};
    try{
        fromauth.register(data1);
        return res.send({"success":"registered successfully"});
    }catch(error){
        return res.send(error);
    }
})

router.get('/login',async(req,res)=>{
    const {email,password}=req.body;
    const data={email,password};
    try{
       return res.send(await fromauth.login(data));
    //    return res.send();
    }catch(e){
        console.log(e);
        return res.send("there is some error");
    }
})