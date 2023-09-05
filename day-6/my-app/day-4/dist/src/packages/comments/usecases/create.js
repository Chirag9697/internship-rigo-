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
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const comments_1 = require("../domain/comments");
const fromusermodel = __importStar(require("../../users"));
const fromrecipemodel = __importStar(require("../../recipies"));
const create = async (data2) => {
    const { commenttext, recipeid, userid } = data2;
    const finduser = await fromusermodel.get_one(userid);
    console.log(finduser);
    if (!finduser) {
        throw new Error("User not found");
        return;
    }
    const findrecipe = await fromrecipemodel.get_one(recipeid);
    if (!findrecipe) {
        throw new Error("recipe not found");
        return;
        // return res.status(400).send({"error":"recipe not found"});
    }
    const data = { commenttext, recipeid, userid };
    const hel = await comments_1.comments.query().insert(data);
    if (!hel) {
        throw new Error("there is some error");
    }
    return hel;
};
exports.create = create;
//# sourceMappingURL=create.js.map