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
        fromlikemodel.create({recipeid,userid});
        res.send("successfully liked");
    }catch(error){
        return res.send("there is some error");
    }
   
})

router.delete('/:id',checktoken(['admin','user']),async(req,res)=>{
    const{id}=req.params;
    try{
        await fromlikemodel.deleterecord(id);
        return res.send("successfully deleted");
    }catch(error){
        return res.send("there is some error");
    }
})
