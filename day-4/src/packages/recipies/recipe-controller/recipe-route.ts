import express from 'express';
import multer from 'multer';
import * as fromusermodel from '../../users'; 
import * as fromrecipemodel from '../../recipies';
// import {checktoken} from '../../../utils/check-token'
import dotenv from 'dotenv'
import {v2 as cloudinary} from 'cloudinary';
import { checktoken } from '../../../utils/check-token';
import DatauriParser from 'datauri/parser';
// import { Path } from 'mongoose';
import path from 'path';
export const router=express.Router();
const parser=new DatauriParser();

dotenv.config();
cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.CLOUD_API_KEY, 
    api_secret: process.env.CLOUD_API_SECRET 
  });
  const storage=multer.memoryStorage();
const upload=multer({storage:storage});
// const dUri=new datauri();
// const dataUri=(req)=>{
//     return datauri(path.extname(req.file.originalname).toString(), req.file.buffer);
// }
router.post('/',upload.single('avatar'),checktoken(['admin','user']),async(req,res)=>{
    // console.log('helo');
    console.log("hello");

    console.log(req.body);
    console.log("file",req.file);
    const extname=path.extname(req.file.originalname).toString();
    console.log(extname);
    const file64=parser.format(extname.toString(),req.file.buffer);
    // try{

        // console.log(file64.content);
    // }catch(error){
        // console.log(error);
    // }
    const{ingredients}=req.body;
    const{recipename,cookingtime,description,instruction,ownerid}=req.body
    const result=await cloudinary.uploader.upload(file64.content);
    console.log(result);
// .then(result=>console.log(result));
    // console.log(ingredients);
    console.log(result);
    const filename=result.url;
    const data={recipename,cookingtime,filename,description,instruction,ownerid,ingredients};
    try{
        const recipe=await fromrecipemodel.create(data);
        return res.status(200).send(recipe);
    }catch(error){
        return res.status(400).send("there is some error")
    } 
    return res.send("success");
})

router.get('/',checktoken(['admin','user']),async(req,res)=>{
    try{
        const {email}=req.user;
        const{findall}=req.body;
        const user=fromusermodel.get_one2(email);
        const ownerid=findall==true?null:user['id'];
        
        const result=await fromrecipemodel.get_all(req.query,ownerid);
        return res.status(200).send(result);
    }catch(error){
        return res.status(400).send('there is some error');
    }
})
router.get('/myrecipies',checktoken(['admin','user']),async(req,res)=>{
    try{
        const {email}=req.user;
        // cons-t{findall}=req.body;
        // const findall=false;
        const user=await fromusermodel.get_one2(email);
        const ownerid=user['id'];
        console.log("ownerid",ownerid);
        
        const result=await fromrecipemodel.get_all(req.query,ownerid);
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