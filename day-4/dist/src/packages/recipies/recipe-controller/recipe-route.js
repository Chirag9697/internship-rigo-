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
const fromusermodel = __importStar(require("../../users"));
const fromrecipemodel = __importStar(require("../../recipies"));
const fromcommentmodel = __importStar(require("../../comments"));
const fromingredientmodel = __importStar(require("../../recipeingredients"));
// import {checktoken} from '../../../utils/check-token'
const dotenv_1 = __importDefault(require("dotenv"));
const cloudinary_1 = require("cloudinary");
const check_token_1 = require("../../../utils/check-token");
const parser_1 = __importDefault(require("datauri/parser"));
// import { Path } from 'mongoose';
const path_1 = __importDefault(require("path"));
exports.router = express_1.default.Router();
const parser = new parser_1.default();
dotenv_1.default.config();
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});
const storage = multer_1.default.memoryStorage();
const upload = (0, multer_1.default)({ storage: storage });
// const dUri=new datauri();
// const dataUri=(req)=>{
//     return datauri(path.extname(req.file.originalname).toString(), req.file.buffer);
// }
exports.router.post('/', upload.single('avatar'), (0, check_token_1.checktoken)(['admin', 'user']), async (req, res) => {
    // console.log(JSON.parse(decodeURIComponent(req.body.ingredients)));
    const { email } = req.user;
    const ingredients = req.body.ingredients;
    console.log("ingredients", ingredients);
    const user = await fromusermodel.get_one2(email);
    const ownerid = user['id'];
    const extname = path_1.default.extname(req.file.originalname).toString();
    const file64 = parser.format(extname.toString(), req.file.buffer);
    const { recipename, cookingtime, description, instruction } = req.body;
    const result = await cloudinary_1.v2.uploader.upload(file64.content);
    const filename = result.url;
    const data = { recipename, cookingtime, filename, description, instruction, ownerid, ingredients };
    try {
        const recipe = await fromrecipemodel.create(data);
        return res.status(200).send(recipe);
    }
    catch (error) {
        return res.status(400).send({ error: `${error}` });
    }
});
exports.router.get('/', async (req, res) => {
    try {
        // const {email}=req.user;
        // const{findall}=req.body;
        // const user=fromusermodel.get_one2(email);
        // const ownerid=findall==true?null:user['id'];
        const result = await fromrecipemodel.get_all(req.query, null);
        return res.status(200).send(result);
    }
    catch (error) {
        return res.status(200).send({ error: `${error}` });
    }
});
exports.router.get('/myrecipies', (0, check_token_1.checktoken)(['admin', 'user']), async (req, res) => {
    try {
        const { email } = req.user;
        const user = await fromusermodel.get_one2(email);
        const ownerid = user['id'];
        console.log("ownerid", ownerid);
        const result = await fromrecipemodel.get_all(req.query, ownerid);
        console.log("results", result);
        return res.status(200).send(result);
    }
    catch (error) {
        return res.status(400).send({ error: `${error}` });
    }
});
exports.router.delete('/:id', (0, check_token_1.checktoken)(['admin', 'user']), async (req, res) => {
    const { id } = req.params;
    try {
        await fromingredientmodel.deleterec({ recipeid: id });
        await fromcommentmodel.deletewithrecipeid(id);
        await fromrecipemodel.deleterecord(id);
        return res.status(200).send("successfully deleted");
    }
    catch (error) {
        return res.status(400).send({ error: `${error}` });
    }
});
exports.router.put('/:id', upload.single('avatar'), (0, check_token_1.checktoken)(['admin', 'user']), async (req, res) => {
    const { id } = req.params;
    const { email } = req.user;
    const user = await fromusermodel.get_one2(email);
    const ownerid = user['id'];
    const extname = path_1.default.extname(req.file.originalname).toString();
    const file64 = parser.format(extname.toString(), req.file.buffer);
    const result = await cloudinary_1.v2.uploader.upload(file64.content);
    const filename = result.url;
    const { ingredients } = req.body;
    const { recipename, cookingtime, description, instruction } = req.body;
    const data = { recipename, cookingtime, description, instruction, ownerid, filename, ingredients };
    try {
        await fromrecipemodel.update(data, id);
        return res.send('successfully updated');
    }
    catch (error) {
        return res.status(400).send({ error: `${error}` });
    }
});
//# sourceMappingURL=recipe-route.js.map