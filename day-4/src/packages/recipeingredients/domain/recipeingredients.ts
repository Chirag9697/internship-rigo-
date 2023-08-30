import { recipies } from "../../recipies";
import { users } from "../../users";
import { Model } from "objection";

export class recipeingredients extends Model{
    recipeid?:number
    ingredientid?:number
    // id?:String
    // userid?:String
    
    static get tableName(){
        return 'recipeingredients'
    }
    // static relationMappings={
    //     ingredientreciperelation:{
    //         relation:Model.ManyToManyRelation,
    //         modelClass:recipies,
    //         join:{
    //             from:"ingredients.id",
    //             through:{
    //                 from:"recipeingredients.ingredientid",
    //                 to:"recipeingredients.recipeid"
    //             },
    //             to:"recipies.id"

    //         }
    //     },
      
    // }
}