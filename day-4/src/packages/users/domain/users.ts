import { Model } from "objection";
import { roles } from "../../roles/domain/roles";
import { recipies } from "../../recipies";
import { favouriterecipies } from "../../favourite-recipies/domain/favourite-recipies";
export class users extends Model{
    email?:String
    password?:String

    static get tableName(){
        return  'users';
    }
    static relationMappings={
        roles:{
            relation:Model.HasManyRelation,
            modelClass:roles,
            join:{
                from:'users.id',
                to:'roles.roleuser'
            }
        },
        userrelation:{
            relation:Model.HasManyRelation,
            modelClass:recipies,
            join:{
                from:"users.id",
                to:"recipies.ownerid"
            }
        },
        userfavouriterelation:{
            relation:Model.HasManyRelation,
            modelClass:favouriterecipies,
            join:{
                from:"users.id",
                to:"favouriterecipies.userid",
            }
        },
    };
}