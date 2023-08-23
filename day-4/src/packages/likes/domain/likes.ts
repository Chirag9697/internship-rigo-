import { Recipe } from "../../recipies";
import { user } from "../../users";
import { Model } from "objection";

export class like extends Model{
    // commenttext?:String
    recipeid?:String
    userid?:String
    
    static get tableName(){
        return 'likes'
    }
    static relationMappings={
        commentreciperelation:{
            relation:Model.HasOneRelation,
            modelClass:Recipe,
            join:{
                from:"likes.recipeid",
                to:"recipies.id"
            }
        },
        commentuserrelation:{
            relation:Model.HasOneRelation,
            modelClass:user,
            join:{
                from:"likes.userid",
                to:"users.id"
            }
        }
    }
}