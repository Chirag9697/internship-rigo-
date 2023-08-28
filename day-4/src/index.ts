//local
import * as auth from './packages/authentication';
import * as fromusermodel from './packages/users';
import * as fromrecipemodel from './packages/recipies';
import * as fromcommentmodel from './packages/comments';
import * as fromlikemodel from './packages/likes';
import * as fromfavouriterecipe from './packages/favourite-recipies';
//lib
import knex from "knex";
import express from 'express';
import {development} from '../knexfile'
import { Model } from 'objection';

export const app=express();
const connection = development;

const initial="api/v1"
Model.knex(knex(connection));

app.use(express .json());

app.use(`/${initial}/auth`,auth.router);
app.use(`/${initial}/recipies`,fromrecipemodel.router);
app.use(`/${initial}/comments`,fromcommentmodel.router);
app.use(`/${initial}/likes`,fromlikemodel.router);
app.use(`/${initial}/recipies/favourites`,fromfavouriterecipe.router);


app.listen(3000,(req,res)=>{
    console.log("listening on port 3000")
})

// module.exports=app;