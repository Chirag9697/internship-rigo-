import { Model } from "objection";
// import { role } from "../../roles/domain/role";
import { users } from "../../users";
import { fileupload } from "../../fileuploads/domain/fileupload";
import { favouriterecipies } from "../../favourite-recipies";
export class recipies extends Model{
   ownerid?:string
   idi?:String
   recipename?:String
   cookingtime?:String
   description?:String
   instruction?:String
    filename?:String
    static get tableName(){
        return  "recipies";
    }
    static relationMappings={
        userrelation:{
            relation:Model.BelongsToOneRelation,
            modelClass:users,
            join:{
                from:"recipies.ownerid",
                to:"users.id",
            }
        },
        fileuploadrelation:{
            relation:Model.HasManyRelation,
            modelClass:fileupload,
            join:{
                from:"recipies.id",
                to:"fileupload.recipeid"
            }
        },
        favouritereciperelation:{
            relation:Model.HasManyRelation,
            modelClass:favouriterecipies,
            join:{
                from:"Recipe.id",
                to:"favouriterecipies.recipeid",
            }
        }
        
    };
}