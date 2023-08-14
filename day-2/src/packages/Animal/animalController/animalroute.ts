import express from 'express';
import * as fromAnimalUseCase from '../../Animal'


const router=express.Router();

router.get('/',(req,res)=>{
    res.send("hello I am animal");
})
// console.log("creating new data");
// await fromAnimalUseCase.create(data);
router.post('/createanimal/',(req,res)=>{
    const data: Partial<fromAnimalUseCase.Animal> = {animalname:req.body.animalname};
    console.log(fromAnimalUseCase.create(data));
    res.send("person is created");

})
router.get('/getallanimal',(req,res)=>{
    const allanimals=fromAnimalUseCase.get_all();
    console.log(allanimals);
    res.send("getting all the animals");
})

router.get('/getone/:id',(req,res)=>{
    // console.log(req.params);
    const person=fromAnimalUseCase.get_one(req.params.id);
    // console.log(await person);
    // res.send('hello');
    res.send("animal is found");
})

router.delete('/deleteanimal/:id/',(req,res)=>{
    console.log("hello");
    const deleting=fromAnimalUseCase.deleterecord(req.params.id);

    res.send('deleted');
})

router.patch('/updateanimal/:id/:first_name',(req,res)=>{
    const data2: Partial<fromAnimalUseCase.Animal> = {idi: req.params.id, animalname: req.params.animalname};
    console.log(fromAnimalUseCase.update(data2));
    res.send("updaing the record");
})



// module.exports=route
module.exports=router;