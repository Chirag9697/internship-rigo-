import express from 'express';
import multer from 'multer';
import * as fromusermodel from '../../users'; 
import * as fromrecipemodel from '../../recipies';
import * as fromingredientmodel from '../../ingredients';
// import {checktoken} from '../../../utils/check-token'
import { checktoken } from '../../../utils/check-token';
import { fr } from '@faker-js/faker';
export const router=express.Router();
router.get('/',async(req,res)=>{
    try{
        console.log("hello");
        const allingredients=await fromingredientmodel.get_all();
        res.status(200).json(allingredients);
    }catch(error){
        res.status(400).send("something is wrong");
    }
})