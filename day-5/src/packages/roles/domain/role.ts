import { Model } from "objection";
import { user } from "../../users";

export class role extends Model{
    id?:number
    rolename?:String
    static get tableName(){
        return  'roles';
    }
    static relationMappings={
        roles:{
            relation:Model.BelongsToOneRelation,
            modelClass:user,
            join:{
                from:'roles.roleuser',
                to:'users.id',
            }

        }
    };
}