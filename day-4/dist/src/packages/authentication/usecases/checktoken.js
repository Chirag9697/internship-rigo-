"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checktoken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const checktoken = async (req, res, next) => {
    const token = req.headers['x-access-token'];
    console.log(token);
    if (!token) {
        return res.status(400).send("you need to login first");
    }
    console.log(process.env.PRIVATE_KEY);
    await jsonwebtoken_1.default.verify(token.toString(), process.env.PRIVATE_KEY, function (err, decoded) {
        console.log(decoded);
        if (err) {
            return res.status(400).send(err.message);
        }
        // return decoded;
        req.user = decoded;
        console.log("logged in");
        next();
    });
    // console.log(data);
    // next();
};
exports.checktoken = checktoken;
//# sourceMappingURL=checktoken.js.map