import { Model } from "objection";
import { role } from "../../roles/domain/role";
import { Recipe } from "../../recipies";
export class user extends Model{
    email?:String
    password?:String

    static get tableName(){
        return  'users';
    }
    static relationMappings={
        roles:{
            relation:Model.HasManyRelation,
            modelClass:role,
            join:{
                from:'users.id',
                to:'roles.roleuser'
            }
        },
        userrelation:{
            relation:Model.HasManyRelation,
            modelClass:Recipe,
            join:{
                from:"users.id",
                to:"recipies.ownerid"
            }
        }
    };
}