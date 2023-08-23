import express from 'express';
import * as fromusermodel from '../../users'; 
import * as fromrecipemodel from '../../recipies';
import * as fromcommentmodel from '../../comments';
import { checktoken } from '../../authentication';
export const router=express.Router();

router.post('/addcomment',checktoken(['admin','user']),async(req,res)=>{
    console.log("gello");
    const{commenttext,recipeid,userid}=req.body;
    const finduser=await fromusermodel.get_one(userid);
    console.log(finduser);
    if(!finduser){
        return res.status(400).send({"error":"User not found"});
    }
    const findrecipe=await fromrecipemodel.get_one(recipeid);
    if(!findrecipe){
        return res.status(400).send({"error":"recipe not found"});
    }
    const data={commenttext,recipeid,userid};
    const insertcomment=await fromcommentmodel.create(data);
    if(!insertcomment){
        return  res.status(400).send({"error":"failed to add the comment"});
    }
    res.status(200).send({"success":"comment is successfully added"});    
})

router.get('/getallcomments',checktoken(['admin','user']),async(req,res)=>{
    console.log("helo")
    const allcomments=await fromcommentmodel.get_all();
    if(!allcomments){
        return res.status(400).send({"error":"failed to get the recipies"});
    }
    res.send(allcomments);
})

router.delete('/deletecomment/:id',checktoken(['admin']),async(req,res)=>{
    const{id}=req.params;
    const delet=fromcommentmodel.deleterecord(id);
    if(!delet){
        return res.status(400).send({"error":"not able to delete"});
    }
    return res.status(200).send({"success":"successfully deleted"});
})


router.patch('/updatecomment/:id',checktoken(['admin']),async(req,res)=>{
    const{id}=req.params;
    const{commenttext,recipeid,userid}=req.body;
    const data={commenttext,recipeid,userid};
    const updatecomment=await fromcommentmodel.update(data,id);
    console.log(updatecomment);
    if(!updatecomment){
        return res.status(400).send({"error":"not updated"});
    }
    res.status(200).send({"success":"successfully updated"});
})  