import express from 'express';
import multer from 'multer';
import * as fromusermodel from '../../users'; 
import * as fromrecipemodel from '../../recipies';
// import {checktoken} from '../../../utils/check-token'
import { checktoken } from '../../../utils/check-token';
export const router=express.Router();

const upload=multer({dest:'uploads/'});

router.post('/',upload.single('avatar'),checktoken(['admin','user']),async(req,res)=>{
    console.log('helo');
    const {filename}=req.file;
    const{recipename,cookingtime,description,instruction,ownerid}=req.body
    const data={recipename,cookingtime,description,instruction,ownerid,filename};
    try{
        const recipe=await fromrecipemodel.create(data);
        return res.status(200).send(recipe);
    }catch(error){
        return res.status(200).send("there is some error");
    } 
})

router.get('/',checktoken(['admin','user']),async(req,res)=>{
    try{
        const result=await fromrecipemodel.get_all(req.query);
        return res.status(200).send(result);
    }catch(error){
        return res.status(400).send('there is some error');
    }
})

router.delete('/:id',checktoken(['admin','user']),async(req,res)=>{
    const{id}=req.params;
    try{
        await fromrecipemodel.deleterecord(id);
        return res.status(200).send("successfully deleted");
    }catch(error){
        return res.status(400).send("there is some error");
    }
 
})


router.put('/:id',upload.single('avatar'),checktoken(['admin','user']),async(req,res)=>{
    const{id}=req.params;
    const{filename}=req.file
    const{recipename,cookingtime,description,instruction,ownerid}=req.body;
    const data={recipename,cookingtime,description,instruction,ownerid,filename};
    try{
        await fromrecipemodel.update(data,id);
        return res.send('successfully updated');
    }catch(error){
        return res.send("not able to update");    
    }
})