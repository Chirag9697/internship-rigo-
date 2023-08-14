export function globalErrorHandler(err,req,res,next){
    // console.log()
    return res.status(500).send("something broke");
}