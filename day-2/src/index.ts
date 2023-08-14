import {Model} from "objection";
import {development} from "../knexfile.js"
import * as fromPersonUseCase from "./packages/Person"
import knex from "knex";
import express from 'express';
import bodyParser from 'body-parser';
import puppeteer from 'puppeteer';
import { globalErrorHandler } from "./errorhandler/globalerrorhandler.js";
// import {personController} from '../src/packages/Person/personController/personroute.js';
const app=express();
const connection: any = development;
const personController=require('./packages/Person/personController/personroute.js')
Model.knex(knex(connection));

app.use(express.json()); 
app.use('/person',personController);
app.all("*",(req,res,next)=>{
    const err=new Error('somethin went wrong');
    next(err);
})
app.use(globalErrorHandler); 
// express route
// app.ues(personController)
// app.ues(animalController)

async function main() {
    const data: Partial<fromPersonUseCase.Person> = {first_name: "chirag"};
    console.log("creating new data");
    await fromPersonUseCase.create(data);
    console.log("getting all the data");
    // console.log(get_all())
    await fromPersonUseCase.get_all();
    const data2: Partial<fromPersonUseCase.Person> = {idi: 27, first_name: 'rohanram'};
    console.log("updating a record");
    await fromPersonUseCase.update(data2);

    console.log("getting all the records");
    await fromPersonUseCase.get_all();

    console.log("deleting a record");
    await fromPersonUseCase.deleterecord(27);

    console.log("getting all the records");
    await fromPersonUseCase.get_all();

    console.log("getting a record with id 1");
    await fromPersonUseCase.get_one(11);
}

// main();
app.listen(3000,()=>{
    console.log("listening on port 3000");   
})