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
    const data1={email,password,roleuser}
    try{
        const newuser=await fromauth.register(data1)
        console.log("New USER",newuser);
        return res.status(200).send(newuser);
    }catch(error){
        return res.status(400).send(error);
    }
})

router.delete('/deleteuser/:id',async(req,res)=>{
    const{id}=req.params;
    try{
        await fromauth.deleteuser(id);
        res.status(200).send("user deleted");
        
    }catch(error){
        return res.status(400).send("there is some error");
    }

})

router.get('/login',async(req,res)=>{
    const {email,password}=req.body;
    // console.log("hello")
    const data={email,password};
    try{
        const tok=await fromauth.login(data);
        console.log(tok);
       return res.status(200).json(tok);
    //    return res.send();
    }catch(e){
        console.log(e);
        return res.status(400).send("there is some error");
    }
})