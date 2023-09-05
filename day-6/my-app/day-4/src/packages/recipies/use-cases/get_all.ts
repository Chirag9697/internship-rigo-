import {recipies} from '../domain/recipies';

export const get_all=async(data:any,ownerid)=>{
    const query=recipies.query();
    const{recipename}=data;
    // const{ownerid}=data;
    const page=parseInt(data.page);
    const limit=parseInt(data.limit);
    // const finalrecipie=query;
    var query2=query;
    if(ownerid){
        query2=query2.where('ownerid','=',`${ownerid}`);
    }
    if(recipename){
        query2=query.where('recipename','LIKE',`%${recipename}%`);
    }
    const finalrecipies=await query2.page(page ?? 1,limit && 10);
    return {
        recipies:finalrecipies,
        page:data.page || 1, 
        limit:data.limit || 10
    }   
}

