import express from 'express';
import * as fromusermodel from '../../users'; 
import * as fromrecipemodel from '../../recipies';
import * as fromcommentmodel from '../../comments';
import { checktoken } from '../../../utils/check-token';
export const router=express.Router();

router.post('/',checktoken(['admin','user']),async(req,res)=>{
    const{email}=req.user;
    const user=await fromusermodel.get_one2(email);
    const userid=user['id'];
    const{commenttext,recipeid}=req.body;
    const data1={commenttext,recipeid,userid};
    try{
        const succ=await fromcommentmodel.create(data1);
        console.log(succ);
        return res.status(200).send(succ);
    }catch(error){
        return res.status(400).send("there is some error");
    }
})

router.get('/:id',checktoken(['admin','user']),async(req,res)=>{
    try{
        // const{email}=req.user;
        // const user=await fromusermodel.get_one2(email);

        const{id}=req.params
        const allcomments=await fromcommentmodel.get_all(id);
        console.log(allcomments);
        return res.status(200).send(allcomments);
    }catch(error){
        res.status(400).send("there is some error");
    }
})

router.delete('/:id',checktoken(['admin','user']),async(req,res)=>{
    const{id}=req.params;
    try{
        await fromcommentmodel.deleterecord(id);
        return res.status(200).send("successfully deleted");
    }catch(error){
        return res.status(400).send("there is some error");
    }
})


router.put('/:id',checktoken(['admin','user']),async(req,res)=>{
    const{id}=req.params;
    const{commenttext,recipeid,userid}=req.body;
    const data={commenttext,recipeid,userid};
    try{
        await fromcommentmodel.update(data,id);
        return res.status(200).send("successfully updated");
    }catch(error){
        return res.status(400).send("there is some error");
    }
})  