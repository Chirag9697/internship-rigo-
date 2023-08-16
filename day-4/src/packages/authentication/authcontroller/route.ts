import express from 'express';
import bcrypt from 'bcrypt';
import {jwt} from 'jsonwebtoken';
import * as fromusers from '../../users';
import * as fromroles from  '../../roles';



const app=express();
const saltRounds=10;
const salt='helo';
// const jwt=jsonwebtoken();
export const router=express.Router();


// const hashing=(err,hash){
//     if(err){
//         console.log('error');
//         return;
//     }
//     return hash;
// }
router.post('/register',async(req,res)=>{
    // console.log(req.body);
    console.log("welcome to register page");
    const {email,password,roleuser}=req.body;
    // con
    const users=await fromusers.user.query().insert({
        email:email,
        password:await bcrypt.hash(password,saltRounds),
    })
    const userid=await fromusers.user.query().select('id').where('email','=',email);
    console.log();
    // console.log(users);
    const roles=await fromusers.user.relatedQuery('roles').for(userid[0]['id']).insert({
        rolename:roleuser,

    })
    console.log(roles);
    res.send("successfully registered")

})