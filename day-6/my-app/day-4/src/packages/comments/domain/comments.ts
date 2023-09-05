import { recipies } from "../../recipies";
import { users } from "../../users";
import { Model } from "objection";

export class comments extends Model{
    commenttext?:String
    recipeid?:String
    userid?:String
    
    static get tableName(){
        return 'comments'
    }
    static relationMappings={
        commentreciperelation:{
            relation:Model.HasOneRelation,
            modelClass:recipies,
            join:{
                from:"comments.recipeid",
                to:"recipies.id"
            }
        },
        commentuserrelation:{
            relation:Model.HasOneRelation,
            modelClass:users,
            join:{
                from:"comments.userid",
                to:"users.id"
            }
        }
    }
}