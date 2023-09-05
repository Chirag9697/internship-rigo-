import { favouriterecipies } from "../domain/favourite-recipies";
import { users } from "../../users";
import * as fromusermodel from '../../users';
import * as fromrecipemodel from '../../recipies';
export const create=async(data:Partial<favouriterecipies>)=>{
    const{recipeid,userid}=data;
    const found=fromusermodel.get_one(userid);
    if(!found){
        throw new Error("user not found");
        return;
    }
    const recipefound=fromrecipemodel.get_one(recipeid);
    if(!recipefound){
        throw new Error("recipe not found");
        return;
    }
    const data1={recipeid,userid};
    // const addedfavouriterecipe=fromfavouriterecipe.create(data);
    // if(!addedfavouriterecipe){
        // res.send({"failed":"there is  some errror"})
    // }
    // res.send({"success":"recipe added to favourite recipe"});
    const findrecipe=await favouriterecipies.query().findOne(recipeid);
    if(findrecipe){
        throw new Error("recipe is already favourite");
        return;
    }
    const hel=await favouriterecipies.query().insert(data1);
    if(!hel){
        throw new Error("not able to add to favourite recipe");
        return;
    }
    return hel;
    // console.log("insert=",hel);
    // return hel;
}
