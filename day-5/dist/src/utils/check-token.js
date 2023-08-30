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
exports.checktoken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const fromusers = __importStar(require("../packages/users"));
const fromroles = __importStar(require("../packages/roles"));
dotenv_1.default.config();
const checktoken = (rolesdata) => {
    return async (req, res, next) => {
        const token = req.headers['x-access-token'];
        console.log(token);
        if (!token) {
            return res.status(400).send("you need to login first");
        }
        console.log();
        await jsonwebtoken_1.default.verify(token.toString(), process.env.PRIVATE_KEY, async function (err, decoded) {
            console.log(decoded);
            if (err) {
                return res.status(400).send(err.message);
            }
            // return decoded;
            // console.log("hello I am user",decoded);
            req.user = decoded;
            const user = await fromusers.get_one(decoded.email);
            const role = await fromroles.get_one(user['id']);
            console.log("roles", role);
            console.log("logged in");
            console.log(rolesdata);
            if (!rolesdata.includes(role.rolename)) {
                return res.status(400).send("not accessible");
            }
            next();
        });
    };
    // console.log(data);
    // next();
};
exports.checktoken = checktoken;
//# sourceMappingURL=check-token.js.map