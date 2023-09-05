import { Model } from "objection";
// import { role } from "../../roles/domain/role";
import { users } from "../../users";
import { fileupload } from "../../fileuploads/domain/fileupload";
import {recipies } from "../../recipies";

export class favouriterecipies extends Model{
    recipeid?:String
    userid?:String
    static get tableName(){
        return  "favouriterecipies";
    }
    static relationMappings={
        userrelation:{
            relation:Model.BelongsToOneRelation,
            modelClass:users,
            join:{
                from:"favouriterecipies.userid",
                to:"users.id",
            }
        },
        reciperelation:{
            relation:Model.HasOneRelation,
            modelClass:recipies,
            join:{
                from:"favouriterecipies.recipeid",
                to:"Recipe.id"
            }
        }
    };
}