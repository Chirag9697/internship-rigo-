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
exports.router = void 0;
//lib
const express_1 = __importDefault(require("express"));
const authentication_1 = require("../../authentication");
//local
const fromAnimalUseCase = __importStar(require(".."));
exports.router = express_1.default.Router();
exports.router.post('/createanimal/', (0, authentication_1.checktoken)(['employee', 'admin']), (req, res) => {
    const data = { animalname: req.body.animalname };
    console.log(fromAnimalUseCase.create(data));
    res.send("animal is created");
});
exports.router.get('/getallanimal', (0, authentication_1.checktoken)(['employee', 'admin']), (req, res) => {
    // console.log('hello');
    console.log(req.user);
    const allanimals = fromAnimalUseCase.get_all();
    console.log(allanimals);
    res.send("getting all the animals");
});
exports.router.get('/getone/:id', (0, authentication_1.checktoken)(['admin', 'employee']), (req, res) => {
    const animal = fromAnimalUseCase.get_one(req.params.id);
    res.send("animal is found");
});
exports.router.delete('/deleteanimal/:id/', (0, authentication_1.checktoken)(['admin']), (req, res) => {
    console.log("hello");
    const deleting = fromAnimalUseCase.deleterecord(req.params.id);
    res.send('deleted');
});
exports.router.patch('/updateanimal/:id/:first_name', (0, authentication_1.checktoken)(['admin']), (req, res) => {
    const data2 = { idi: req.params.id, animalname: req.params.animalname };
    console.log(fromAnimalUseCase.update(data2));
    res.send("updaing the record");
});
exports.router.post('/pdf-service', (0, authentication_1.checktoken)(['admin', 'employee']), async (req, res) => {
    // console.log("hello");
    const pdf = await fromAnimalUseCase.generatepdf(req.body);
    res.send(pdf);
});
// module.exports=route
// module.exports=router;
//# sourceMappingURL=animal-route.js.map