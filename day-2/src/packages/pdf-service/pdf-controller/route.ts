import express from 'express';
import { generatepdf } from '../use-cases';
const router=express.Router();
// const generatepdf=require('./usecases/generatepdf');

router.post('/pdf-service',async(req,res)=>{
    console.log("hello");
    const pdf=await generatepdf(req.body);
    res.send(pdf);
})

module.exports=router;