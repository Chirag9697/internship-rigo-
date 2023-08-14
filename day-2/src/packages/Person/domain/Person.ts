import {Model} from 'objection';

export class Person extends Model{
    first_name?: string;
    idi?:number;
    static get tableName(){
        return 'persons';
    }
}

