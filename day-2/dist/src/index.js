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
const objection_1 = require("objection");
const knexfile_js_1 = require("../knexfile.js");
const fromPersonUseCase = __importStar(require("./packages/Person"));
const knex_1 = __importDefault(require("knex"));
const express_1 = __importDefault(require("express"));
const globalerrorhandler_js_1 = require("./errorhandler/globalerrorhandler.js");
// import {personController} from '../src/packages/Person/personController/personroute.js';
const app = (0, express_1.default)();
const connection = knexfile_js_1.development;
const personController = require('./packages/Person/personController/personroute.js');
objection_1.Model.knex((0, knex_1.default)(connection));
app.use(express_1.default.json());
app.use('/person', personController);
app.all("*", (req, res, next) => {
    const err = new Error('somethin went wrong');
    next(err);
});
app.use(globalerrorhandler_js_1.globalErrorHandler);
// express route
// app.ues(personController)
// app.ues(animalController)
async function main() {
    const data = { first_name: "chirag" };
    console.log("creating new data");
    await fromPersonUseCase.create(data);
    console.log("getting all the data");
    // console.log(get_all())
    await fromPersonUseCase.get_all();
    const data2 = { idi: 27, first_name: 'rohanram' };
    console.log("updating a record");
    await fromPersonUseCase.update(data2);
    console.log("getting all the records");
    await fromPersonUseCase.get_all();
    console.log("deleting a record");
    await fromPersonUseCase.deleterecord(27);
    console.log("getting all the records");
    await fromPersonUseCase.get_all();
    console.log("getting a record with id 1");
    await fromPersonUseCase.get_one(11);
}
// main();
app.listen(3000, () => {
    console.log("listening on port 3000");
});
//# sourceMappingURL=index.js.map