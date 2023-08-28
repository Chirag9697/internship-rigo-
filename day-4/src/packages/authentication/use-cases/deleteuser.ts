import * as fromusers from '../../users';
import * as fromroles from '../../roles';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

export const deleteuser=async(id:any)=>{
    const deleting=await fromusers.users.query().deleteById(id);
    // console.log(deleting);]
    if(!deleting){
        throw new Error("not able to delete");
    }
    // return result;
}

