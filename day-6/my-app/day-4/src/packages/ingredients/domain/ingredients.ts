import { recipies } from "../../recipies";
import { users } from "../../users";
import { Model } from "objection";
import { recipeingredients } from "../../recipeingredients/domain/recipeingredients";

export class ingredients extends Model{
    ingredientname?:String
    // id?:String
    // userid?:String
    
    static get tableName(){
        return 'ingredients'
    }
    static relationMappings={
        ingredientreciperelation:{
            relation:Model.ManyToManyRelation,
            modelClass:recipies,
            join:{
                from:"ingredients.id",
                through:{
                    from:"recipeingredients.ingredientid",
                    to:"recipeingredients.recipeid"
                },
                to:"recipies.id"

            }
        },
      
    }
}