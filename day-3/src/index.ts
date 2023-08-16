import express from 'express';
import bodyParser from 'body-parser';
import puppeteer from 'puppeteer';
const app=express();
const pdfservice=require('./pdf-service'); 

app.use(bodyParser.urlencoded({extended:true}));-
app.use(bodyParser.json()); 
app.use('',pdfservice);


app.listen(3000,()=>{
    console.log("listening on port 3000");   
})