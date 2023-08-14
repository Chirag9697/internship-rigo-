import express from 'express';
import * as fromAnimalUseCase from '..';


export const router=express.Router();

router.post('/createanimal/',(req,res)=>{
    const data: Partial<fromAnimalUseCase.animal> = {animalname:req.body.animalname,ownerid:req.body.ownerid};
    console.log(fromAnimalUseCase.create(data));
    res.send("animal is created");

})
router.get('/getallanimal',(req,res)=>{
    const allanimals=fromAnimalUseCase.get_all();
    console.log(allanimals);
    res.send("getting all the animals");
})

router.get('/getone/:id',(req,res)=>{
    const person=fromAnimalUseCase.get_one(req.params.id);
    res.send("animal is found");
})

router.delete('/deleteanimal/:id/',(req,res)=>{
    console.log("hello");
    const deleting=fromAnimalUseCase.deleterecord(req.params.id);

    res.send('deleted');
})

router.patch('/updateanimal/:id/:animalname',(req,res)=>{
    const data2: Partial<fromAnimalUseCase.animal> = {idi: req.params.id, animalname: req.params.animalname};
    console.log(fromAnimalUseCase.update(data2));
    res.send("updaing the record");
})


// module.exports=router;