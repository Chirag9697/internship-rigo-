//lib
import {Model} from 'objection';


export class animal extends Model{
    animalname?: string;
    idi?:number;
    static get tableName(){
        return 'animals';
    }
   
}

