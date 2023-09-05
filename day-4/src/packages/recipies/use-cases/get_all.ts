import {recipies} from '../domain/recipies';
import { likes } from '../../likes';

export const get_all=async(data:any,ownerid:any)=>{
    const query=recipies.query();
    const{recipename}=data;
    // const{ownerid}=data;
    const page=parseInt(data.page);
    const limit=parseInt(data.limit);
    // const finalrecipie=query;
    var query2=query;

    if(ownerid){
        query2=query2.where('ownerid','=',`${ownerid}`);
        console.log(query2);
    }
    if(recipename){
        query2=query.where('recipename','LIKE',`%${recipename}%`);
    }
    var finalrecipies=await query2.page(page ?? 1,limit && 10);
    var finalrecipies2=[];
    for(var i=0;i<finalrecipies.results.length;i++){
        const nooflikes=await likes.query().where('recipeid','=',`${finalrecipies.results[i].id}`).count();
        const newresult={...finalrecipies.results[i],nooflikes:nooflikes[0]['count(*)']};
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

