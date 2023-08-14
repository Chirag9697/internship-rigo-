import {Model} from 'objection';
import { Animal } from '../../Animal';

export class Person extends Model{
    first_name?: string;
    idi?:number;
    static get tableName(){
        return 'persons';
    }
    static relationMappings = {
        animals: {
            relation: Model.HasManyRelation,
            modelClass:Animal,
            join: {
                from: 'persons.id',
                to: 'animals.ownerid'
            }
        }
    };
}

