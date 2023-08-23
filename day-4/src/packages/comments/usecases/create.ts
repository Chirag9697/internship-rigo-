import { Recipe } from "../../recipies";
import { user } from "../../users";
import { comment } from "../domain/comment";

import * as fromusermodel from '../../users'; 
import * as fromrecipemodel from '../../recipies';
import * as fromcommentmodel from '../../comments';

export const create=async(data2:Partial<comment>)=>{
    const{commenttext,recipeid,userid}=data2;
    const finduser=await fromusermodel.get_one(userid);
    console.log(finduser);
    if(!finduser){
        throw new Error("User not found");
        return;
    }
    const findrecipe=await fromrecipemodel.get_one(recipeid);
    if(!findrecipe){
        throw new Error("recipe not found");
        return;
        // return res.status(400).send({"error":"recipe not found"});
    }
    const data={commenttext,recipeid,userid};
  
    const hel=await comment.query().insert(data);
    if(!hel){
        throw new Error("there is some error");
    }
    // console.log("insert=",hel);
    return hel;
}
