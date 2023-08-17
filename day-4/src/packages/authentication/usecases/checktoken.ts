import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
export const checktoken=async(req,res,next)=>{
    const token=req.headers['x-access-token'];
    console.log(token);
    if(!token){
        return res.status(400).send("you need to login first");
    }
    console.log(process.env.PRIVATE_KEY);
    await jwt.verify(token.toString(),process.env.PRIVATE_KEY,function(err,decoded){
        console.log(decoded);
        if(err){
            return res.status(400).send(err.message);
        }
        // return decoded;
        req.user=decoded;
        console.log("logged in");
        next();
    });
    // console.log(data);

    // next();
}