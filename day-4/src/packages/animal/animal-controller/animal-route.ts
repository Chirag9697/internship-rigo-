//lib
import express from 'express';
import { checktoken } from '../../authentication';
//local
import * as fromAnimalUseCase from ".."
import * as fromAuth from '../../authentication';
export const router=express.Router();



router.post('/createanimal/',checktoken(['employee','admin']),(req,res)=>{
    const data: Partial<fromAnimalUseCase.animal> = {animalname:req.body.animalname};
    console.log(fromAnimalUseCase.create(data));
    res.send("animal is created");
    
})
router.get('/getallanimal',checktoken(['employee','admin']),(req,res)=>{
    // console.log('hello');
    console.log(req.user);
    const allanimals=fromAnimalUseCase.get_all();
    console.log(allanimals);
    res.send("getting all the animals");
})

router.get('/getone/:id',checktoken(['admin','employee']),(req,res)=>{
    const animal=fromAnimalUseCase.get_one(req.params.id);
    res.send("animal is found");
})

router.delete('/deleteanimal/:id/',checktoken(['admin']),(req,res)=>{
    console.log("hello");
    const deleting=fromAnimalUseCase.deleterecord(req.params.id);

    res.send('deleted');
})

router.patch('/updateanimal/:id/:first_name',checktoken(['admin']),(req,res)=>{
    const data2: Partial<fromAnimalUseCase.animal> = {idi: req.params.id, animalname: req.params.animalname};
    console.log(fromAnimalUseCase.update(data2));
    res.send("updaing the record");
})
router.post('/pdf-service',checktoken(['admin','employee']),async(req,res)=>{
    // console.log("hello");
    const pdf=await fromAnimalUseCase.generatepdf(req.body);
    res.send(pdf);
})



// module.exports=route
// module.exports=router;