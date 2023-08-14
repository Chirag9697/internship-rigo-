"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const knexfile_js_1 = require("../knexfile.js");
const knex_1 = __importDefault(require("knex"));
const express_1 = __importDefault(require("express"));
const globalerrorhandler_js_1 = require("./errorhandler/globalerrorhandler.js");
// import { Person } from "./packages/Person";
// import {personController} from '../src/packages/Person/personController/personroute.js';
const app = (0, express_1.default)();
const connection = knexfile_js_1.development;
const personController = require('./packages/Person/personController/personroute.js');
const animalController = require('./packages/Animal/animalController/animalroute.js');
objection_1.Model.knex((0, knex_1.default)(connection));
app.use(express_1.default.json());
app.use('/person', personController);
app.use('/animal', animalController);
app.all("*", (req, res, next) => {
    const err = new Error('somethin went wrong');
    next(err);
});
app.use(globalerrorhandler_js_1.globalErrorHandler);
// express route
// app.ues(personController)
// app.ues(animalController)
app.listen(3000, () => {
    console.log("listening on port 3000");
});
//# sourceMappingURL=index.js.map