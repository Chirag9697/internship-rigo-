import express from 'express';
import * as fromPersonUseCase from ".."

export const router=express.Router();



router.post('/createperson/',(req,res)=>{
    const data: Partial<fromPersonUseCase.person> = {first_name:req.body.first_name};
    console.log(fromPersonUseCase.create(data));
    res.send("person is created");
    
})
router.get('/getallperson',(req,res)=>{
    // console.log('hello');
    const allPersons=fromPersonUseCase.get_all();
    console.log(allPersons);
    res.send("getting all the persons");
})

router.get('/getone/:id',(req,res)=>{
    const person=fromPersonUseCase.get_one(req.params.id);
    res.send("person is found");
})

router.delete('/deleteperson/:id/',(req,res)=>{
    console.log("hello");
    const deleting=fromPersonUseCase.deleterecord(req.params.id);

    res.send('deleted');
})

router.patch('/updateperson/:id/:first_name',(req,res)=>{
    const data2: Partial<fromPersonUseCase.person> = {idi: req.params.id, first_name: req.params.first_name};
    console.log(fromPersonUseCase.update(data2));
    res.send("updaing the record");
})
router.post('/pdf-service',async(req,res)=>{
    // console.log("hello");
    const pdf=await fromPersonUseCase.generatepdf(req.body);
    res.send(pdf);
})



// module.exports=route
// module.exports=router;