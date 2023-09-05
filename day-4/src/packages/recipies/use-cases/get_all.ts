import {recipies} from '../domain/recipies';
import { likes } from '../../likes';
import * as fromusermodel from '../../users';

export const get_all=async(data:any,ownerid:any)=>{
    const query=recipies.query();
    const{recipename}=data;
    // const{ownerid}=data;
    const page=parseInt(data.page);
    const limit=parseInt(data.limit);
    // const finalrecipie=query;
    var query2=query;
    // console.log("users",user);
    if(ownerid){
        const username=await fromusermodel.get_one(ownerid);
        query2=query2.where('ownerid','=',`${ownerid}`);
        // console.log(query2);
    }
    if(recipename){
        query2=query.where('recipename','LIKE',`%${recipename}%`);
    }
    var finalrecipies=await query2.page(page ?? 1,limit && 10);
    console.log("finalrecipies",finalrecipies);
    // const{ownerid}=finalrecipies.results;
    var finalrecipies2=[];
    for(var i=0;i<finalrecipies.results.length;i++){
        const {ownerid}=finalrecipies.results[i];
        const user=await fromusermodel.get_one(ownerid);
        // try{
            // console.log("users",user);
        // }catch(error){
            // console.log("why error",error);
        // }
        
        // console.log("users",user.name);
        const nooflikes=await likes.query().where('recipeid','=',`${finalrecipies.results[i].id}`).count();
        const newresult={...finalrecipies.results[i],username:user.name,nooflikes:nooflikes[0]['count(*)'],};
        finalrecipies2.push(newresult);
    }
    // const newfinalrecipies=finalrecipies.results.map(async(finalrecipe)=>{
    //     // const likes1=nooflikes['likes'];
    //     // console.log("nooflikes",nooflikes[0]['count(*)']);
    //     // console.log("nooflikes",{...finalrecipe});
    //     return(
    //         // ...finalrecipe,nooflikes=
            
    //     //    {...finalrecipe,nooflikes:nooflikes[0]['count(*)']}
    //     )
    // })
    
    // console.log(newfinalrecipies);
    return {
        recipies:finalrecipies2,
        page:data.page || 1, 
        limit:data.limit || 10
    }   
}

