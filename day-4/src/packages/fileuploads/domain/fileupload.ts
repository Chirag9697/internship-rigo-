import { Model } from "objection";
import { role } from "../../roles/domain/role";
import { Recipe } from "../../recipies";
export class fileupload extends Model{
    filename?:String
    recipeid?:String

    static get tableName(){
        return  'fileupload';
    }
    static relationMappings={  
       reciperelation:{
            relation:Model.HasOneRelation,
            modelClass:Recipe,
            join:{
                from:"fileupload.recipeid",
                to:"recipies.id"
            }
        }
    };
}