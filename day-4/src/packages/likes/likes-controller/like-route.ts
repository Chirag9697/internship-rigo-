import express from 'express';
import * as fromusermodel from '../../users'; 
import * as fromrecipemodel from '../../recipies';
import * as fromcommentmodel from '../../comments';
import * as fromlikemodel from '../../likes';
import { checktoken } from '../../authentication';
export const router=express.Router();

router.post('/addlike',checktoken(['admin','user']),async(req,res)=>{
    console.log("gello");
    const{recipeid,userid}=req.body;
    const finduser=await fromusermodel.get_one(userid);
    console.log(finduser);
    if(!finduser){
        return res.status(400).send({"error":"User not found"})
    }
    const findrecipe=await fromrecipemodel.get_one(recipeid);
    if(!findrecipe){
        return res.status(400).send({"error":"recipe not found"});
    }
    const data={recipeid,userid};
    const insertcomment=await fromlikemodel.create(data);
    if(!insertcomment){
        return  res.status(400).send({"error":"failed to like"});
    }
    res.status(200).send({"success":"recipe is liked"});    
})

router.delete('/deletelike/:id',checktoken(['admin','user']),async(req,res)=>{
    const{id}=req.params;
    const delet=fromlikemodel.deleterecord(id);
    if(!delet){
        return res.status(400).send({"error":"not able to delete"});
    }
    return res.status(200).send({"success":"successfully deleted"});
})
