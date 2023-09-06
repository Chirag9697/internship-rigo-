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
exports.get_all = void 0;
// import {Recipe} from '../domain/recipe';
const comments_1 = require("../domain/comments");
const fromusermodel = __importStar(require("../../users"));
const get_all = async (id) => {
    const allcomments = await comments_1.comments.query().where('recipeid', '=', `${id}`);
    if (!allcomments) {
        throw new Error("cannot get all comments");
    }
    var allcomm = [];
    for (var i = 0; i < allcomments.length; i++) {
        const user = await fromusermodel.get_one(allcomments[i].userid);
        allcomm.push(Object.assign(Object.assign({}, allcomments[i]), { commentowner: user.name }));
    }
    return allcomm;
};
exports.get_all = get_all;
//# sourceMappingURL=get_all.js.map