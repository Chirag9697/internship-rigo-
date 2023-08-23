import { Recipe } from "../../recipies";
import { user } from "../../users";
import { Model } from "objection";

export class comment extends Model{
    commenttext?:String
    recipeid?:String
    userid?:String
    
    static get tableName(){
        return 'comments'
    }
    static relationMappings={
        commentreciperelation:{
            relation:Model.HasOneRelation,
            modelClass:Recipe,
            join:{
                from:"comments.recipeid",
                to:"recipies.id"
            }
        },
        commentuserrelation:{
            relation:Model.HasOneRelation,
            modelClass:user,
            join:{
                from:"comments.userid",
                to:"users.id"
            }
        }
    }
}