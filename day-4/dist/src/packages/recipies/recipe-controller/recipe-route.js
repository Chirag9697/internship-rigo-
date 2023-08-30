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
const multer_1 = __importDefault(require("multer"));
const fromrecipemodel = __importStar(require("../../recipies"));
// import {checktoken} from '../../../utils/check-token'
const check_token_1 = require("../../../utils/check-token");
exports.router = express_1.default.Router();
const upload = (0, multer_1.default)({ dest: 'uploads/' });
exports.router.post('/', upload.single('avatar'), (0, check_token_1.checktoken)(['admin', 'user']), async (req, res) => {
    // console.log('helo');
    const { filename } = req.file;
    const { ingredients } = req.body;
    const { recipename, cookingtime, description, instruction, ownerid } = req.body;
    // console.log(ingredients);
    const data = { recipename, cookingtime, filename, description, instruction, ownerid, ingredients };
    try {
        const recipe = await fromrecipemodel.create(data);
        return res.status(200).send(recipe);
    }
    catch (error) {
        return res.status(200).send("there is some error");
    }
    // return res.send("success");
});
exports.router.get('/', (0, check_token_1.checktoken)(['admin', 'user']), async (req, res) => {
    try {
        const result = await fromrecipemodel.get_all(req.query);
        return res.status(200).send(result);
    }
    catch (error) {
        return res.status(400).send('there is some error');
    }
});
exports.router.delete('/:id', (0, check_token_1.checktoken)(['admin', 'user']), async (req, res) => {
    const { id } = req.params;
    try {
        await fromrecipemodel.deleterecord(id);
        return res.status(200).send("successfully deleted");
    }
    catch (error) {
        return res.status(400).send("there is some error");
    }
});
exports.router.put('/:id', upload.single('avatar'), (0, check_token_1.checktoken)(['admin', 'user']), async (req, res) => {
    const { id } = req.params;
    const { filename } = req.file;
    const { recipename, cookingtime, description, instruction, ownerid } = req.body;
    const data = { recipename, cookingtime, description, instruction, ownerid, filename };
    try {
        await fromrecipemodel.update(data, id);
        return res.send('successfully updated');
    }
    catch (error) {
        return res.send("not able to update");
    }
});
//# sourceMappingURL=recipe-route.js.map