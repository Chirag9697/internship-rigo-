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
exports.register = void 0;
const fromusers = __importStar(require("../../users"));
const fromroles = __importStar(require("../../roles"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const register = async (data) => {
    const { email, password, name, roleuser } = data;
    const finduser = await fromusers.get_one2(email);
    console.log("users", finduser);
    if (finduser) {
        throw new Error("email is already used");
        return;
    }
    const data1 = { email: email, name: name, password: await bcrypt_1.default.hash(password, parseInt(process.env.Saltrounds)) };
    const userid = await fromusers.create(data1);
    const roledata = { id: userid['id'], rolename: roleuser };
    const pass = await fromroles.create(roledata);
    if (!pass) {
        throw new Error('there is some error');
    }
    return userid;
};
exports.register = register;
//# sourceMappingURL=register.js.map