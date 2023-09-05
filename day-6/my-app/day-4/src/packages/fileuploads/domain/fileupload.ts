import { Model } from "objection";
import { roles } from "../../roles/domain/roles";
import { recipies } from "../../recipies";
export class fileupload extends Model{
    filename?:String
    recipeid?:String

    static get tableName(){
        return  'fileupload';
    }
    static relationMappings={  
       reciperelation:{
            relation:Model.HasOneRelation,
            modelClass:recipies,
            join:{
                from:"fileupload.recipeid",
                to:"recipies.id"
            }
        }
    };
}