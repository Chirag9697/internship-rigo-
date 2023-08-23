import { Model } from "objection";
// import { role } from "../../roles/domain/role";
import { user } from "../../users";
import { fileupload } from "../../fileuploads/domain/fileupload";

export class Recipe extends Model{
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
            modelClass:user,
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
        }
    };
}