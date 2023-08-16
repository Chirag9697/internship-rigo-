"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const users_1 = require("../../users");
const bcrypt_1 = __importDefault(require("bcrypt"));
const app = (0, express_1.default)();
const saltRounds = 10;
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
    const users = await users_1.user.query().insert({
        username: email,
        password: await bcrypt_1.default.hash(password, saltRounds, (err, hash) => {
            if (err) {
                console.log("error");
                return;
            }
            console.log(hash);
            return hash;
        })
    });
    console.log(users);
});
//# sourceMappingURL=route.js.map