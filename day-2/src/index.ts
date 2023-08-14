import {Model} from "objection";
import {development} from "../knexfile.js"
import * as fromPersonUseCase from "./packages/Person"
import knex from "knex";
import express from 'express';
import bodyParser from 'body-parser';
import puppeteer from 'puppeteer';
import { globalErrorHandler } from "./errorhandler/globalerrorhandler.js";
// import { Person } from "./packages/Person";

// import {personController} from '../src/packages/Person/personController/personroute.js';
const app=express();
const connection: any = development;
const personController=require('./packages/Person/personController/personroute.js')
const animalController=require('./packages/Animal/animalController/animalroute.js');
Model.knex(knex(connection));

app.use(express.json()); 
app.use('/person',personController);
app.use('/animal',animalController);

app.all("*",(req,res,next)=>{
    const err=new Error('somethin went wrong');
    next(err);
})
app.use(globalErrorHandler); 
// express route
// app.ues(personController)
// app.ues(animalController)



app.listen(3000,()=>{
    console.log("listening on port 3000");   
})