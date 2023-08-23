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
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
//local
const fromusers = __importStar(require("../../users"));
const fromroles = __importStar(require("../../roles"));
dotenv_1.default.config();
const app = (0, express_1.default)();
exports.router = express_1.default.Router();
exports.router.post('/register', async (req, res) => {
    console.log("welcome to register page");
    const { email, password, roleuser } = req.body;
    const data = { email: email, password: await bcrypt_1.default.hash(password, parseInt(process.env.Saltrounds)) };
    const userid = await fromusers.create(data);
    const roledata = { id: userid['id'], rolename: roleuser };
    const pass = await fromroles.create(roledata);
    if (!pass) {
        return res.send('there is some error');
    }
    res.send("successfully registered");
});
exports.router.get('/login', async (req, res) => {
    const { email, password } = req.body;
    const userlogging = await fromusers.get_one2(email);
    if (!userlogging) {
        return res.send("user not found");
    }
    const check = await bcrypt_1.default.compare(password, userlogging['password']);
    if (!check) {
        return res.send("password not correct");
    }
    const token = jsonwebtoken_1.default.sign({ email: email, password: password }, process.env.PRIVATE_KEY);
    console.log(token);
    res.json({ token: token });
});
//# sourceMappingURL=route.js.map