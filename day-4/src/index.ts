import express from 'express';
import * as auth from './packages/authentication';
import * as fromusermodel from './packages/users';
// import * as fromAnimalUseCase from './packages/animal';
import * as fromrecipemodel from './packages/recipies';
import * as fromcommentmodel from './packages/comments';
import * as fromlikemodel from './packages/likes';
import * as fromfavouriterecipe from './packages/favourite-recipe';

import knex from "knex";
import {development} from '../knexfile'
import { Model } from 'objection';

const app=express();
const connection = development;


Model.knex(knex(connection));

app.use(express .json());
app.use('/',auth.router);
app.use('/recipe',fromrecipemodel.router);
app.use('/comment',fromcommentmodel.router);
app.use('/likes',fromlikemodel.router);
app.use('/favouriterecipe',fromfavouriterecipe.router);

function checkrecipe(){
    const data={
        ownerid:'1',
        recipename:'burger',
        cookingtime:'30 min',
        description:'hello',
        instruction:'cook'
    }
    // const newrecipe=fromrecipemodel.create(data);
    const data2={
        email:"chlel",
        password:"hello"
    }
    // const newuser=fromusermodel.create(data2);
    // console.log(newuser);
    // console.log(newrecipe);
}
checkrecipe();
app.listen(3000,(req,res)=>{
    console.log("listening on port 3000")
})