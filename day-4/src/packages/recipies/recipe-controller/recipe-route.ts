import express from 'express';
import multer from 'multer';
import * as fromusermodel from '../../users'; 
import * as fromrecipemodel from '../../recipies';
import * as fromcommentmodel from '../../comments';
import * as fromingredientmodel from '../../recipeingredients';
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
    // console.log(JSON.parse(decodeURIComponent(req.body.ingredients)));
    const {email}=req.user;
    const ingredients=req.body.ingredients;
    console.log("ingredients",ingredients);
    const user=await fromusermodel.get_one2(email);
    const ownerid=user['id'];
    const extname=path.extname(req.file.originalname).toString();
    const file64=parser.format(extname.toString(),req.file.buffer);
    const{recipename,cookingtime,description,instruction}=req.body
    const result=await cloudinary.uploader.upload(file64.content);
    const filename=result.url;
    const data={recipename,cookingtime,filename,description,instruction,ownerid,ingredients};
    try{
        const recipe=await fromrecipemodel.create(data);
        return res.status(200).send(recipe);
    }catch(error){
        return res.status(400).send({error:`${error}`})
    } 
})

router.get('/',async(req,res)=>{
    try{
        // const {email}=req.user;
        // const{findall}=req.body;
        // const user=fromusermodel.get_one2(email);
        // const ownerid=findall==true?null:user['id'];
        
        const result=await fromrecipemodel.get_all(req.query,null);
        return res.status(200).send(result);
    }catch(error){
        return res.status(200).send({error:`${error}`})
    }
})
router.get('/myrecipies',checktoken(['admin','user']),async(req,res)=>{
    try{
        const {email}=req.user;
        
        const user=await fromusermodel.get_one2(email);
        const ownerid=user['id'];
        
        console.log("ownerid",ownerid);
        const result=await fromrecipemodel.get_all(req.query,ownerid);
        console.log("results",result);
        return res.status(200).send(result);
    }catch(error){
        return res.status(400).send({error:`${error}`})
        
    }
})


router.delete('/:id',checktoken(['admin','user']),async(req,res)=>{
    const{id}=req.params;
    try{
        await fromingredientmodel.deleterec({recipeid:id});
        await fromcommentmodel.deletewithrecipeid(id);
        await fromrecipemodel.deleterecord(id);
        return res.status(200).send("successfully deleted");
    }catch(error){
        return res.status(400).send({error:`${error}`})
        
    }
 
})


router.put('/:id',upload.single('avatar'),checktoken(['admin','user']),async(req,res)=>{
    const{id}=req.params;
    const {email}=req.user;
    const user=await fromusermodel.get_one2(email);
    const ownerid=user['id'];
    const extname=path.extname(req.file.originalname).toString();
    const file64=parser.format(extname.toString(),req.file.buffer);
    const result=await cloudinary.uploader.upload(file64.content);
    const filename=result.url;
    const{ingredients}=req.body;
    const{recipename,cookingtime,description,instruction}=req.body;
    const data={recipename,cookingtime,description,instruction,ownerid,filename,ingredients};
    try{
        await fromrecipemodel.update(data,id);
        return res.send('successfully updated');
    }catch(error){
        return res.status(400).send({error:`${error}`})
    }
})