"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fromAnimalUseCase = __importStar(require("../../Animal"));
const router = express_1.default.Router();
router.get('/', (req, res) => {
    res.send("hello I am animal");
});
// console.log("creating new data");
// await fromAnimalUseCase.create(data);
router.post('/createanimal/', (req, res) => {
    const data = { animalname: req.body.animalname, ownerid: req.body.ownerid };
    console.log(fromAnimalUseCase.create(data));
    res.send("animal is created");
});
router.get('/getallanimal', (req, res) => {
    const allanimals = fromAnimalUseCase.get_all();
    console.log(allanimals);
    res.send("getting all the animals");
});
router.get('/getone/:id', (req, res) => {
    // console.log(req.params);
    const person = fromAnimalUseCase.get_one(req.params.id);
    // console.log(await person);
    // res.send('hello');
    res.send("animal is found");
});
router.delete('/deleteanimal/:id/', (req, res) => {
    console.log("hello");
    const deleting = fromAnimalUseCase.deleterecord(req.params.id);
    res.send('deleted');
});
router.patch('/updateanimal/:id/:first_name', (req, res) => {
    const data2 = { idi: req.params.id, animalname: req.params.animalname };
    console.log(fromAnimalUseCase.update(data2));
    res.send("updaing the record");
});
// module.exports=route
module.exports = router;
//# sourceMappingURL=animalroute.js.map