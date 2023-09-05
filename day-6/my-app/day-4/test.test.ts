// import supertest from 'supertest';
import request from 'supertest';
import assert from 'assert';
import express from 'express';
import { app } from './src/index';
import {faker} from '@faker-js/faker';
import { expect } from 'chai';
import { favouriterecipies } from './src/packages/favourite-recipies';

let addedRecipeId;
let addedCommentId;
let addedUserId;
let addedFavouriterecipeid;
let addedLikeId;
const newuser = {
    email: faker.internet.email(),
    password: "chirag",
    roleuser: "admin"
}
describe('/api/v1/auth', () => {
    describe('api/v1/auth/register', () => {

        it('should return successfully registered', async () => {

            const response = await request(app).post('/api/v1/auth/register').send(newuser)
                .expect(200);
            addedUserId = response.body.id;
            
            console.log("added user id",addedUserId);
        })
    })
    describe('api/v1/auth/login', () => {

        it('it should return token', function (done) {

            request(app)
                .get('/api/v1/auth/login')
                .send(newuser)
                .expect('Content-Type', 'application/json; charset=utf-8')
                .expect(200);
            done();
        })
    })
})

describe('/api/v1/recipies', () => {
    describe('add a recipe', () => {

        it("it should return added successfully", async () => {

            const newrecipe = {
                recipename: "pizza",
                cookingtime: "30 min",
                description: "hello",
                instruction: "hello",
                ownerid: addedUserId.toString(),
                // filename:"hello"
            }
            const path = './images/recipephoto1.jpeg'
            const loginResponse = await request(app)
                .get('/api/v1/auth/login')
                .send(newuser);
            const accesstoken = loginResponse.body.token;
            console.log(accesstoken);
            const response = await request(app)
                .post('/api/v1/recipies')
                .set('x-access-token', `${accesstoken}`)
                .field("recipename", "pizza")
                .field("cookingtime", "30 min")
                .field('description', 'heloo')
                .field('instruction', 'hello')
                .field('ownerid', `${newrecipe.ownerid}`)
                .attach('avatar', path)
                // .send(newrecipe)
                .expect(200);
            // Extract the recipe ID from the response
            console.log("RESPONSE BODY", response.body) // Update the key according to your response structure
            addedRecipeId = response.body.id;
            console.log("Added Recipe ID:", addedRecipeId);
        })
    })
    describe('get all recipies', () => {

        it("it should return all recipies", async () => {

            const loginResponse = await request(app)
                .get('/api/v1/auth/login')
                .send(newuser);
            const accesstoken = loginResponse.body.token;
            const response = await request(app)
                .get('/api/v1/recipies')
                .set('x-access-token', `${accesstoken}`)  // Set the access token in the "Authorization" header
                .expect(200);
        })

    })
    describe('updating recipies', () => {

        it("it should update the recipe", async () => {

            const updaterecipe = {
                recipename: "burget",
                cookingtime: "30 min",
                description: "hello",
                instruction: "hello",
                ownerid: addedUserId.toString(),
                // filename:"hello"
            }
            const path = './images/recipephoto1.jpeg'

            const loginResponse = await request(app)
                .get('/api/v1/auth/login')
                .send(newuser);
            const accesstoken = loginResponse.body.token;
            const response = await request(app)
                .put(`/api/v1/recipies/${addedRecipeId}`)
                .set('x-access-token', `${accesstoken}`)
                .field("recipename", `${updaterecipe.recipename}`)
                .field("cookingtime", `${updaterecipe.cookingtime}`)
                .field('description', `${updaterecipe.description}`)
                .field('instruction', `${updaterecipe.instruction}`)
                .field('ownerid', `${updaterecipe.ownerid}`)
                .attach('avatar', path)
                // .send(newrecipe)
                .expect(200);
        })

    })


    describe('/api/v1/comments', () => {

        it("it should return added successfully", async () => {

            const newcomment = {
                commenttext: "hello bye bye",
                userid: addedUserId.toString(),
                recipeid: addedRecipeId.toString()
            }
            const loginResponse = await request(app)
                .get('/api/v1/auth/login')
                .send(newuser);
            const accesstoken = loginResponse.body.token;
            console.log(accesstoken);
            const response = await request(app)
                .post('/api/v1/comments/')
                .set('x-access-token', `${accesstoken}`)
                .send(newcomment)
                .expect(200);
            addedCommentId = response.body.id;
            // console.log("added comment body", response.body);
            // addedCommentId=response.body.id;
        })


    })
    //comments
    describe('/api/v1/comments', () => {

        it("it should return all comments", async () => {

            const loginResponse = await request(app)
                .get('/api/v1/auth/login')
                .send(newuser);
            const accesstoken = loginResponse.body.token;
            console.log(accesstoken);
            const response = await request(app)
                .get('/api/v1/comments')
                .set('x-access-token', `${accesstoken}`)
                // .send(newcomment)
                .expect(200);
        })


    })

    describe('/api/v1/comments', () => {

        it("it should update a comment", async () => {

            const newcomment = {
                commenttext: "hello bye bye hi hi",
                userid: addedUserId.toString(),
                recipeid: addedRecipeId.toString()
            }
            const loginResponse = await request(app)
                .get('/api/v1/auth/login')
                .send(newuser);
            const accesstoken = loginResponse.body.token;
            console.log(accesstoken);
            const response = await request(app)
                .put(`/api/v1/comments/${addedCommentId}`)
                .set('x-access-token', `${accesstoken}`)
                .send(newcomment)
                .expect(200);
        })
    })
    describe('/api/v1/recipies/favourites', () => {

        it("it should add to favourite recipe", async () => {
            const newfavouriterecipe = {
                userid: addedUserId.toString(),
                recipeid: addedRecipeId.toString()
            }
            const loginResponse = await request(app)
                .get('/api/v1/auth/login')
                .send(newuser);
            const accesstoken = loginResponse.body.token;
            const response = await request(app).post('/api/v1/recipies/favourites').
                set('x-access-token', `${accesstoken}`).
                send(newfavouriterecipe).
                expect(200);
            addedFavouriterecipeid = response.body.id;
        })

    })
    describe('/api/v1/recipies/favourites', () => {
        it("it should get all favourite recipe", async () => {
            const loginResponse = await request(app)
                .get('/api/v1/auth/login')
                .send(newuser);
            const accesstoken = loginResponse.body.token;
            const response = await request(app).get('/api/v1/recipies/favourites').
                set('x-access-token', `${accesstoken}`).
                expect(200);
        })

    })
    describe('/api/v1/recipies/favourites', () => {
        it("it should delete the favourite recipe", async () => {
            const loginResponse = await request(app)
                .get('/api/v1/auth/login')
                .send(newuser);
            const accesstoken = loginResponse.body.token;
            const response = await request(app).delete(`/api/v1/recipies/favourites/${addedFavouriterecipeid}`).
                set('x-access-token', `${accesstoken}`).
                expect(200);
        })

    })

    describe('/api/v1/likes', () => {

        it("it should add like to recipe", async () => {
            const newlike = {
                userid: addedUserId.toString(),
                recipeid: addedRecipeId.toString()
            }
            const loginResponse = await request(app)
                .get('/api/v1/auth/login')
                .send(newuser);
            const accesstoken = loginResponse.body.token;
            const response = await request(app).post('/api/v1/likes').
                set('x-access-token', `${accesstoken}`).
                send(newlike).
                expect(200);
            addedLikeId = response.body.id;
        })

    })

    describe('/api/v1/likes', () => {

        it("it should delete a like", async () => {

            const loginResponse = await request(app)
                .get('/api/v1/auth/login')
                .send(newuser);
            const accesstoken = loginResponse.body.token;
            console.log(accesstoken);
            const response = await request(app)
                .delete(`/api/v1/likes/${addedLikeId}`)
                .set('x-access-token', `${accesstoken}`)
                .expect(200);

        })



    })
    describe('/api/v1/comments', () => {

        it("it should delete a comment", async () => {

            const loginResponse = await request(app)
                .get('/api/v1/auth/login')
                .send(newuser);
            const accesstoken = loginResponse.body.token;
            console.log(accesstoken);
            const response = await request(app)
                .delete(`/api/v1/comments/${addedCommentId}`)
                .set('x-access-token', `${accesstoken}`)
                .expect(200);

        })



    })


    describe('deleting recipe', () => {

        it("it should delete the recipe", async () => {

            const loginResponse = await request(app)
                .get('/api/v1/auth/login')
                .send(newuser);
            const accesstoken = loginResponse.body.token;
            const response = await request(app)
                .delete(`/api/v1/recipies/${addedRecipeId}`)
                .set('x-access-token', `${accesstoken}`)  // Set the access token in the "Authorization" header
                .expect(200);
        })

    })
    describe('deleting users', () => {
        it("it should delete the user", async () => {
            const loginResponse = await request(app)
                .get('/api/v1/auth/login')
                .send(newuser);
            const accesstoken = loginResponse.body.token;
            const response = await request(app)
                .delete(`/api/v1/auth/deleteuser/${addedUserId}`)
                .expect(200);
        })
    })
})




