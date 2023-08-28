import express from 'express';
import * as fromusermodel from '../../users'; 
import * as fromrecipemodel from '../../recipies';
import * as fromcommentmodel from '../../comments';
import * as fromlikemodel from '../../likes';
import { checktoken } from '../../../utils/check-token';
export const router=express.Router();

router.post('/',checktoken(['admin','user']),async(req,res)=>{
    const{recipeid,userid}=req.body;
    try{
        const liked=await fromlikemodel.create({recipeid,userid});
        res.status(200).send(liked);
    }catch(error){
        return res.status(400).send("there is some errer");
    }
   
})

router.delete('/:id',checktoken(['admin','user']),async(req,res)=>{
    const{id}=req.params;
    try{
        await fromlikemodel.deleterecord(id);
        return res.status(200).send("successfully deleted");
    }catch(error){
        return res.status(400).send("there is some error");
    }
})
