import { Model } from "objection";
import { role } from "../../roles/domain/role";

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

        }
    };
}