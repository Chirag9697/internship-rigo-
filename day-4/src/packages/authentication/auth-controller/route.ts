//lib
import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

//local
import * as fromusers from '../../users';
import * as fromroles from  '../../roles';



const app=express();
const saltRounds=0;
const salt='helo';
export const router=express.Router();



router.post('/register',async(req,res)=>{
    console.log("welcome to register page");
    const {email,password,roleuser}=req.body;
    const data={email:email,password:await bcrypt.hash(password,saltRounds)};
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
    const userlogging=await fromusers.get_one(email);
    if(!userlogging){
        return res.send("password is not correct");
    }  
    const check=await bcrypt.compare(password,userlogging['password']);
    if(!check){
        return res.send("user not found")
    }
    const token=jwt.sign({email:email,password:password},'shhh');
    console.log(token);
    res.json({token:token});
})