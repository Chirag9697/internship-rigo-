import express from 'express';
import multer from 'multer';
import * as fromusermodel from '../../users'; 
import * as fromrecipemodel from '../../recipies';
import * as fromfavouriterecipe from '../../favourite-recipies';
import { checktoken } from '../../../utils/check-token';
// import checktoken from '../../../utils/check-token'

export const router=express.Router();


router.post('/',checktoken(['admin','user']),async(req,res)=>{
    const{recipeid,userid}=req.body;
    const data1={recipeid,userid};
    try{
        await fromfavouriterecipe.create(data1);
        return res.send("added to favourite recipe");
    }catch(error){
        return res.send("there is some error");
    }


})

router.get('/',checktoken(['admin','user']),async(req,res)=>{
    try{
        const favouriterecipe=await fromfavouriterecipe.get_all();
        return res.send(favouriterecipe);
    }catch(error){
        return res.send('there is some error');
    }
})

router.delete('/:id',checktoken(['admin','user']),async(req,res)=>{
    const{id}=req.params;
    try{
        await fromfavouriterecipe.deleterecord(id);
        return res.send("successfully deleted");
    }catch(error){
        return res.send("there is some error");
    }
})


