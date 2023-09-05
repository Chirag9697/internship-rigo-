import express from 'express';
import multer from 'multer';
import * as fromusermodel from '../../users'; 
import * as fromrecipemodel from '../../recipies';
import * as fromfavouriterecipe from '../../favourite-recipies';
// import { checktoken } from '../../../utils/check-token';
// import checktoken from '../../../utils/check-token'
import { checktoken } from '../../../utils/check-token';

export const router=express.Router();


router.post('/',checktoken(['admin','user']),async(req,res)=>{
    const{recipeid}=req.body;
    console.log("favourite recipies");
    console.log("recipeid",recipeid);
    const{email}=req.user;
    const user=await fromusermodel.get_one2(email);
    const userid=user['id'];
    console.log(userid);
    console.log("userid",userid);
    const data1={recipeid,userid};
    try{
        const favrecipe=await fromfavouriterecipe.create(data1);
        return res.status(200).send(favrecipe);
    }catch(error){
        return res.status(200).send({error:`${error}`});
    }


})

router.get('/',checktoken(['admin','user']),async(req,res)=>{
    try{
        const{email}=req.user;
        const user=await fromusermodel.get_one2(email);
        const userid=user['id'];
        const favouriterecipe=await fromfavouriterecipe.get_all(userid);
        const allfavrecipies=[];
        for(var i=0;i<favouriterecipe.length;i++){
            const recipe=await fromrecipemodel.get_one(favouriterecipe[i]['recipeid']);
             allfavrecipies.push({favrecipeid:favouriterecipe[i]['id'],...recipe});
        }
        console.log("favourites",allfavrecipies);
        return res.status(200).send(allfavrecipies);
    }catch(error){
        return res.status(200).send({error:`${error}`});
    }
})

router.delete('/:id',checktoken(['admin','user']),async(req,res)=>{
    const{id}=req.params;
    try{
        await fromfavouriterecipe.deleterecord(id);
        return res.status(200).send("successfully deleted");
    }catch(error){
        return res.status(200).send({error:`${error}`});
    }
})


