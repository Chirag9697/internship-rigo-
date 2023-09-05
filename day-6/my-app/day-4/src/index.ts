//local
import * as auth from './packages/authentication';
import * as fromusermodel from './packages/users';
import * as fromrecipemodel from './packages/recipies';
import * as fromcommentmodel from './packages/comments';
import * as fromlikemodel from './packages/likes';
import * as fromfavouriterecipe from './packages/favourite-recipies';
import * as fromingredientmodel from './packages/ingredients';
//lib
import knex from "knex";
import express from 'express';
import {development} from '../knexfile'
import { Model } from 'objection';
import cors from 'cors';

export const app=express();
const connection = development;
// var cors=require('cors');
const initial="api/v1"
Model.knex(knex(connection));
app.use(cors());
app.use(express .json());

app.use(`/${initial}/auth`,auth.router);
app.use(`/${initial}/recipies`,fromrecipemodel.router);
app.use(`/${initial}/comments`,fromcommentmodel.router);
app.use(`/${initial}/likes`,fromlikemodel.router);
app.use(`/${initial}/recipies/favourites`,fromfavouriterecipe.router);
app.use(`/${initial}/ingredients/`,fromingredientmodel.router);

function addingredients(){
    const ingredient=['rice','barley','wheat','water','aachar','kachar'];
    for(var i=0;i<ingredient.length;i++){
        fromingredientmodel.create({ingredientname:ingredient[i]});
    }
    console.log('added all ingredient');
    
}   
// addingredients();
app.listen(3000,(req,res)=>{
    console.log("listening on port 3000")
})

// module.exports=app;