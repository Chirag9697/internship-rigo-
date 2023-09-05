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
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const fromusers = __importStar(require("../../users"));
const app = (0, express_1.default)();
const saltRounds = 0;
const salt = 'helo';
// const jwt=jsonwebtoken();
exports.router = express_1.default.Router();
// const hashing=(err,hash){
//     if(err){
//         console.log('error');
//         return;
//     }
//     return hash;
// }
exports.router.post('/register', async (req, res) => {
    // console.log(req.body);
    console.log("welcome to register page");
    const { email, password, roleuser } = req.body;
    // con
    const users = await fromusers.user.query().insert({
        email: email,
        password: await bcrypt_1.default.hash(password, saltRounds),
    });
    const userid = await fromusers.user.query().select('id').where('email', '=', email);
    console.log();
    // console.log(users);
    const roles = await fromusers.user.relatedQuery('roles').for(userid[0]['id']).insert({
        rolename: roleuser,
    });
    console.log(roles);
    res.send("successfully registered");
});
exports.router.get('/login', async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    const userpassword = await fromusers.user.query().select('password').where('email', '=', email);
    if (userpassword) {
        const check = await bcrypt_1.default.compare(password, userpassword[0]['password']);
        if (check) {
            const token = jsonwebtoken_1.default.sign({ email: email, password: password }, 'shhh');
            console.log(token);
            res.json({ token: token });
        }
        else {
            res.send("password is not correct");
        }
    }
    else {
        res.send("user not found");
    }
});
//# sourceMappingURL=route.js.map