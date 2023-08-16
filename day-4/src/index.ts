import express from 'express';
import * as auth from './packages/authentication';
// import {development} from "../knexfile.js"
import knex from "knex";
import {development} from '../knexfile'
import { Model } from 'objection';
// const Knex=require('knex');
const app=express();
const connection = development;
// console.log(connection);
// console.log(development);
Model.knex(knex(connection));

app.use(express.json());
app.use('/',auth.router);

app.listen(3000,(req,res)=>{
    // console.log(development);
    console.log("listening on port 3000");
})