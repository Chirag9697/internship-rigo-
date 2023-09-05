import { recipies } from "../../recipies";
import { users } from "../../users";
import * as fromusermodel from "../../users";
import * as fromrecipemodel from "../../recipies";
import { likes} from "../domain/likes";
export const create=async(data:Partial<likes>)=>{
    const{userid,recipeid}=data;
    const finduser=await fromusermodel.get_one(userid);
    console.log(finduser);
    if(!finduser){
        throw new Error("user not found");
        return;
    }
    const findrecipe=await fromrecipemodel.get_one(recipeid);
    if(!findrecipe){
        throw new Error("recipe not found");
    }
    const data1={recipeid,userid};
    const findlike=await likes.query().findOne({userid,recipeid});
    if(findlike){
        throw new Error("user has already liked");
        return;
    }
    const liked=await likes.query().insert(data);
    if(!liked){
        throw new Error("not able to like");
        return;
    }
    return liked;
}
