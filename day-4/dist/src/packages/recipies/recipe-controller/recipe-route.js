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
const check_token_1 = require("../../../utils/check-token");
exports.router = express_1.default.Router();
const upload = (0, multer_1.default)({ dest: 'uploads/' });
exports.router.post('/addrecipe', upload.single('avatar'), (0, check_token_1.checktoken)(['admin', 'user']), async (req, res) => {
    console.log("addrecipe");
    const filename = "hello";
    const { recipename, cookingtime, description, instruction, ownerid } = req.body;
    console.log(ownerid);
    const finduser = await fromusermodel.get_one(ownerid);
    console.log(finduser);
    if (!finduser) {
        return res.status(400).send({ "error": "User not found" });
    }
    const data = { recipename, cookingtime, description, instruction, ownerid, filename };
    const insertrecipe = await fromrecipemodel.create(data);
    if (!insertrecipe) {
        return res.status(400).send({ "error": "failed to insert the recipe" });
    }
    res.status(200).send({ "success": "recipe is successfully uploaded" });
});
exports.router.get('/getallrecipe', (0, check_token_1.checktoken)(['admin', 'user']), async (req, res) => {
    const allrecipies = await fromrecipemodel.get_all();
    if (!allrecipies) {
        return res.status(400).send({ "error": "failed to get the recipies" });
    }
    res.send(allrecipies);
});
exports.router.delete('/deleterecipe/:id', (0, check_token_1.checktoken)(['admin', 'user']), async (req, res) => {
    const { id } = req.params;
    const delet = fromrecipemodel.deleterecord(id);
    if (!delet) {
        return res.status(400).send({ "error": "not able to delete" });
    }
    return res.status(200).send({ "success": "successfully deleted" });
});
exports.router.patch('/updaterecipe/:id', (0, check_token_1.checktoken)(['admin', 'user']), async (req, res) => {
    const { id } = req.params;
    const { recipename, cookingtime, description, instruction, ownerid } = req.body;
    const data = { recipename, cookingtime, description, instruction, ownerid };
    const updaterecipe = await fromrecipemodel.update(data, id);
    console.log(updaterecipe);
    if (!updaterecipe) {
        return res.status(400).send({ "error": "not updated" });
    }
    res.status(200).send({ "success": "successfully updated" });
});
//# sourceMappingURL=recipe-route.js.map