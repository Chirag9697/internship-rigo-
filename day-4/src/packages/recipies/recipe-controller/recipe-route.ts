import express from 'express';
import multer from 'multer';
import * as fromusermodel from '../../users'; 
import * as fromrecipemodel from '../../recipies';
import { checktoken } from '../../../utils/check-token';
export const router=express.Router();

const upload=multer({dest:'uploads/'});

router.post('/addrecipe',upload.single('avatar'),checktoken(['admin','user']),async(req,res)=>{
    console.log("addrecipe");
    const{filename}=req.file;
    const{recipename,cookingtime,description,instruction,ownerid}=req.body
    console.log(ownerid);
    const finduser=await fromusermodel.get_one(ownerid);
    console.log(finduser)
    if(!finduser){
        return res.status(400).send({"error":"User not found"});
    }
    const data={recipename,cookingtime,description,instruction,ownerid,filename};
    const insertrecipe=await fromrecipemodel.create(data);
    if(!insertrecipe){
        return  res.status(400).send({"error":"failed to insert the recipe"});
    }
    res.status(200).send({"success":"recipe is successfully uploaded"});    
})

router.get('/getallrecipe',checktoken(['admin','user']),async(req,res)=>{
    const allrecipies=await fromrecipemodel.get_all();
    if(!allrecipies){
        return res.status(400).send({"error":"failed to get the recipies"});
    }
    res.send(allrecipies);
})

router.delete('/deleterecipe/:id',checktoken(['admin','user']),async(req,res)=>{
    const{id}=req.params;
    const delet=fromrecipemodel.deleterecord(id);
    if(!delet){
        return res.status(400).send({"error":"not able to delete"});
    }
    return res.status(200).send({"success":"successfully deleted"});
})


router.patch('/updaterecipe/:id',checktoken(['admin','user']),async(req,res)=>{
    const{id}=req.params;
    const{recipename,cookingtime,description,instruction,ownerid}=req.body;
    const data={recipename,cookingtime,description,instruction,ownerid};
    const updaterecipe=await fromrecipemodel.update(data,id);
    console.log(updaterecipe);
    if(!updaterecipe){
        return res.status(400).send({"error":"not updated"});
    }
    res.status(200).send({"success":"successfully updated"});
})