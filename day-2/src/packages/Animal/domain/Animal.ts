import {Model} from 'objection';
// import { Person } from '../../Person';
export class animal extends Model{
    animalname?: string;
    idi?:number;
    ownerid?:number;
    static get tableName(){
        return 'animals';
    } 
}

