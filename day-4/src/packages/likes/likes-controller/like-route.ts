import express from 'express';
import * as fromusermodel from '../../users'; 
import * as fromrecipemodel from '../../recipies';
import * as fromcommentmodel from '../../comments';
import * as fromlikemodel from '../../likes';
import { checktoken } from '../../../utils/check-token';
export const router=express.Router();

router.post('/',checktoken(['admin','user']),async(req,res)=>{
    const {email}=req.user;
    const user=await fromusermodel.get_one2(email);
    const userid=user['id'];
    const{recipeid}=req.body;
    try{
        const liked=await fromlikemodel.create({recipeid,userid});
        console.log(liked);
        res.status(200).send(liked);
    }catch(error){
        return res.status(200).send({error:"there is some error"});
    }
   
})

router.delete('/:recipeid',checktoken(['admin','user']),async(req,res)=>{
    const {email}=req.user;
    const user=await fromusermodel.get_one2(email);
    const userid=user['id'];
    console.log("users",userid);
    // console.log("params")
    const{recipeid}=req.params;
    console.log("recipies",recipeid);
    console.log("details",{userid,recipeid});

    try{
        await fromlikemodel.deleterecord(recipeid,userid);
        return res.status(200).send("successfully deleted");
    }catch(error){
        return res.status(200).send("there is some error");
    }
})
