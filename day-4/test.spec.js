// import {app} from './src/index'
const supertest=require("supertest");
const assert=require('assert');
const express=require('express');
const app=require('../day-4/src/index');
// const app=express();

// request(app).get('/api/v1/register')
describe('/api/v1/auth',()=>{
    it('should return successfully registered',async(done)=>{
        const newuser={
            "email":"chirag72@gmail.com",
            "password":"chirag",
            "roleuser":"user"        
        }
        const response=await request(app).post('/api/v1/register').send(newuser);
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('successfully registered');
    })
})