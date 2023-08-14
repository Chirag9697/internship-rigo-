import { Model } from "objection";
import {development} from "../knexfile.js"
import { create, deleterecord, get_all, get_one, update } from "./packages/Person/index.js";
import knex from "knex";
import { Person } from "./packages/Person/index.js";
const connection:any=development;

Model.knex(knex(connection));
async function main(){
    const data:Partial<Person>={first_name:"chirag"};
    console.log("creating new data");
    await create(data);
    console.log("getting all the data");
    // console.log(get_all())
    await get_all();
    const data2:Partial<Person>={idi:27,first_name:'rohanram'};
    console.log("updating a record");
    await update(data2);

    console.log("getting all the records");
    await get_all();
    
    console.log("deleting a record");
    await deleterecord(27);

    console.log("getting all the records");
    await get_all();

    console.log("getting a record with id 1");
    await get_one(11);
}

main();
    