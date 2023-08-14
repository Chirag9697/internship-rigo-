import {Model} from 'objection';
import { animal } from '../../animal';

export class person extends Model{
    first_name?: string;
    idi?:number;
    static get tableName(){
        return 'persons';
    }
    static relationMappings = {
        animals: {
            relation: Model.HasManyRelation,
            modelClass:animal,
            join: {
                from: 'persons.id',
                to: 'animals.ownerid'
            }
        }
    };
}

