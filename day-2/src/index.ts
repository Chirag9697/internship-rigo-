//lib
import {Model} from "objection";
import {development} from "../knexfile.js"
import knex from "knex";
import express from 'express';
import bodyParser from 'body-parser';
import puppeteer from 'puppeteer';

//local
import { globalErrorHandler } from "./error-handler/global-error-handler.js";
import * as fromPersonUseCase from "./packages/person";
import * as fromAnimalUseCase from "./packages/animal";


const app=express();
const connection: any = development;

Model.knex(knex(connection));

app.use(express.json());

const path='/v1/api';
app.use(`${path}/person`,fromPersonUseCase.router);
app.use(`${path}/animal`,fromAnimalUseCase.router);

app.all("*",(req,res,next)=>{
    const err=new Error('somethin went wrong');
    next(err);
})
app.use(globalErrorHandler); 

app.listen(3000,()=>{
    console.log("listening on port 3000");   
})