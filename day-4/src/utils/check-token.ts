import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import * as fromusers from '../packages/users';
import * as fromroles from '../packages/roles';
dotenv.config();
export const checktoken=(rolesdata:any)=>{
    return async(req,res,next)=>{

        const token=req.headers['x-access-token'];
        console.log(token);
        if(!token){
            return res.status(400).send("you need to login first");
        }
        console.log(process.env.PRIVATE_KEY);
        await jwt.verify(token.toString(),process.env.PRIVATE_KEY,async function(err,decoded){
            console.log(decoded);
            if(err){
                return res.status(400).send(err.message);
            }
            // return decoded;
            // console.log("hello I am user",decoded);
            
            req.user=decoded;
            const user=await fromusers.get_one2(decoded.email);
            const role=await fromroles.get_one(user['id']);
            console.log("roles",role);

            console.log("logged in");
            console.log(rolesdata)
            if(!rolesdata.includes(role.rolename)){
                return res.status(400).send("not accessible");
            }
            next();
        });
    }
}