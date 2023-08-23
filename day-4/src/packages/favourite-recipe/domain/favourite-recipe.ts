import { Model } from "objection";
// import { role } from "../../roles/domain/role";
import { user } from "../../users";
import { fileupload } from "../../fileuploads/domain/fileupload";
import { Recipe } from "../../recipies";

export class favouriterecipe extends Model{
    recipeid?:String
    userid?:String
    static get tableName(){
        return  "favouriterecipies";
    }
    static relationMappings={
        userrelation:{
            relation:Model.BelongsToOneRelation,
            modelClass:user,
            join:{
                from:"favouriterecipies.userid",
                to:"users.id",
            }
        },
        reciperelation:{
            relation:Model.HasOneRelation,
            modelClass:Recipe,
            join:{
                from:"favouriterecipies.recipeid",
                to:"Recipe.id"
            }
        }
    };
}