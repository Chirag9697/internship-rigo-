import express from 'express';
import * as auth from './packages/authentication';
// import * as fromAnimalUseCase from './packages/animal';
import knex from "knex";
import {development} from '../knexfile'
import { Model } from 'objection';

const app=express();
const connection = development;


Model.knex(knex(connection));

app.use(express .json());
app.use('/',auth.router);


app.listen(3000,(req,res)=>{
    console.log("listening on port 3000")
})