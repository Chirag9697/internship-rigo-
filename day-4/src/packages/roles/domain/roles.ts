import { Model } from "objection";
import { users } from "../../users";

export class roles extends Model{
    id?:number
    rolename?:String
    static get tableName(){
        return  'roles';
    }
    static relationMappings={
        roles:{
            relation:Model.BelongsToOneRelation,
            modelClass:users,
            join:{
                from:'roles.roleuser',
                to:'users.id',
            }

        }
    };
}