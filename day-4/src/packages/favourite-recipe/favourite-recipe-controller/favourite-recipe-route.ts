import express from 'express';
import multer from 'multer';
import * as fromusermodel from '../../users'; 
import * as fromrecipemodel from '../../recipies';
import * as fromfavouriterecipe from '../../favourite-recipe';
import { checktoken } from '../../../utils/check-token';
export const router=express.Router();

// const upload=multer({dest:'uploads/'});

router.post('/addfavouriterecipe',checktoken(['admin','user']),async(req,res)=>{
    const{recipeid,userid}=req.body;
    const found=fromusermodel.get_one(userid);
    if(!found){
        return res.send({"failed":"user not found"});
    }
    const recipefound=fromrecipemodel.get_one(recipeid);
    if(!recipefound){
        return res.send({"failed":"recipe not found"});
    }
    const data={recipeid,userid};
    const addedfavouriterecipe=fromfavouriterecipe.create(data);
    if(!addedfavouriterecipe){
        res.send({"failed":"there is  some errror"})
    }
    res.send({"success":"recipe added to favourite recipe"});

})

router.get('/getallfavouriterecipe',checktoken(['admin','user']),async(req,res)=>{
   const favouriterecipe=fromfavouriterecipe.get_all();
   res.send({favouriterecipe});
})

router.delete('/deletefavouriterecipe/:id',checktoken(['admin','user']),async(req,res)=>{
    const{id}=req.params;
    const delet=fromfavouriterecipe.deleterecord(id);
    if(!delet){
        return res.status(400).send({"error":"not able to delete"});
    }
    return res.status(200).send({"success":"successfully deleted"});
})


router.patch('/updatefavouriterecipe/:id',checktoken(['admin','user']),async(req,res)=>{
    const{recipeid,userid}=req.body;
    const found=fromusermodel.get_one(userid);
    if(!found){
        return res.send({"failed":"user not found"});
    }
    const recipefound=fromrecipemodel.get_one(recipeid);
    if(!recipefound){
        return res.send({"failed":"recipe not found"});
    }
    const data={recipeid,userid};
    const {id}=req.params;
    const addedfavouriterecipe=fromfavouriterecipe.update(data,id);
    if(!addedfavouriterecipe){
        res.send({"failed":"there is  some errror"})
    }
    res.send({"success":"recipe added to favourite recipe"});
})