import express from 'express';
import multer from 'multer';
import * as fromusermodel from '../../users'; 
import * as fromrecipemodel from '../../recipies';
export const router=express.Router();

const upload=multer({dest:'uploads/'});

