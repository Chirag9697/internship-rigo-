import {Recipe} from '../domain/recipe';

export const get_all=async(data:any)=>{
    const allrecipies=await Recipe.query();
    // console.log(allrecipies);
    if(!allrecipies){
        throw new Error("cannot get all recipies");
        return;
    }
    const{recipename}=data;
    const page=parseInt(data.page);
    const limit=parseInt(data.limit);
    const result={recipies:{},next:{},previous:{}};
    if(recipename){
        var newrecipies=allrecipies.filter((recipe)=>{
            if(recipe.recipename.includes(recipename)==true){
                return recipe;
            }
        })
        if(page && limit){
            const startindex=(page-1)*limit;
            const endindex=page*limit;
            if(endindex<newrecipies.length){
                result.next={
                    page:page+1,
                    limit:limit
                }
            }
            if(startindex>0){
                result.previous={
                    page:page-1,
                    limit:limit
                }
            }
            const recipies=newrecipies.slice(startindex,endindex);
            result.recipies=recipies;
            // return res.send(result);
            return result;
        }
        else{
            result.recipies=newrecipies;
            // return res.send(result);
            return result;
        }
    }
    result.recipies=allrecipies;
    return result;   
}

