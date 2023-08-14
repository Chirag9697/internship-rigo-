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
const express_1 = __importDefault(require("express"));
const fromPersonUseCase = __importStar(require("../../person"));
exports.router = express_1.default.Router();
exports.router.post('/createperson/', (req, res) => {
    const data = { first_name: req.body.first_name };
    console.log(fromPersonUseCase.create(data));
    res.send("person is created");
});
exports.router.get('/getallperson', (req, res) => {
    // console.log('hello');
    const allPersons = fromPersonUseCase.get_all();
    console.log(allPersons);
    res.send("getting all the persons");
});
exports.router.get('/getone/:id', (req, res) => {
    const person = fromPersonUseCase.get_one(req.params.id);
    res.send("person is found");
});
exports.router.delete('/deleteperson/:id/', (req, res) => {
    console.log("hello");
    const deleting = fromPersonUseCase.deleterecord(req.params.id);
    res.send('deleted');
});
exports.router.patch('/updateperson/:id/:first_name', (req, res) => {
    const data2 = { idi: req.params.id, first_name: req.params.first_name };
    console.log(fromPersonUseCase.update(data2));
    res.send("updaing the record");
});
exports.router.post('/pdf-service', async (req, res) => {
    // console.log("hello");
    const pdf = await fromPersonUseCase.generatepdf(req.body);
    res.send(pdf);
});
// module.exports=route
// module.exports=router;
//# sourceMappingURL=personroute.js.map