import { recipies } from "../../recipies";
import { users } from "../../users";
import { Model } from "objection";

export class likes extends Model{
    // commenttext?:String
    recipeid?:String
    userid?:String
    
    static get tableName(){
        return 'likes'
    }
    static relationMappings={
        commentreciperelation:{
            relation:Model.HasOneRelation,
            modelClass:recipies,
            join:{
                from:"likes.recipeid",
                to:"recipies.id"
            }
        },
        commentuserrelation:{
            relation:Model.HasOneRelation,
            modelClass:users,
            join:{
                from:"likes.userid",
                to:"users.id"
            }
        }
    }
}