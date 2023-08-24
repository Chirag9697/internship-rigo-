import express from 'express';
import * as fromusermodel from '../../users'; 
import * as fromrecipemodel from '../../recipies';
import * as fromcommentmodel from '../../comments';
import { checktoken } from '../../../utils/check-token';
export const router=express.Router();

router.post('/',checktoken(['admin','user']),async(req,res)=>{
    const{commenttext,recipeid,userid}=req.body;
    const data1={commenttext,recipeid,userid};
    try{
        const succ=await fromcommentmodel.create(data1);
        return res.send("comment successfully added");
    }catch(error){
        return res.send("there is some error");
    }
})

router.get('/',checktoken(['admin','user']),async(req,res)=>{
    try{
        const allcomments=await fromcommentmodel.get_all();
        return res.send(allcomments);
    }catch(error){
        res.send("there is some error");
    }
})

router.delete('/:id',checktoken(['admin','user']),async(req,res)=>{
    const{id}=req.params;
    try{
        await fromcommentmodel.deleterecord(id);
        return res.send("successfully deleted");
    }catch(error){
        return res.send("there is some error");
    }
})


router.put('/:id',checktoken(['admin','user']),async(req,res)=>{
    const{id}=req.params;
    const{commenttext,recipeid,userid}=req.body;
    const data={commenttext,recipeid,userid};
    try{
        await fromcommentmodel.update(data,id);
        return res.send("successfully updated");
    }catch(error){
        return res.send("there is some error");
    }
    // if(!updatecomment){
        // return res.status(400).send({"error":"not updated"});
    // }
    // res.status(200).send({"success":"successfully updated"});
})  