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
const fromusermodel = __importStar(require("../../users"));
const fromrecipemodel = __importStar(require("../../recipies"));
const fromcommentmodel = __importStar(require("../../comments"));
const authentication_1 = require("../../authentication");
exports.router = express_1.default.Router();
exports.router.post('/addcomment', (0, authentication_1.checktoken)(['admin', 'user']), async (req, res) => {
    console.log("gello");
    const { commenttext, recipeid, userid } = req.body;
    const finduser = await fromusermodel.get_one(userid);
    console.log(finduser);
    if (!finduser) {
        return res.status(400).send({ "error": "User not found" });
    }
    const findrecipe = await fromrecipemodel.get_one(recipeid);
    if (!findrecipe) {
        return res.status(400).send({ "error": "recipe not found" });
    }
    const data = { commenttext, recipeid, userid };
    const insertcomment = await fromcommentmodel.create(data);
    if (!insertcomment) {
        return res.status(400).send({ "error": "failed to add the comment" });
    }
    res.status(200).send({ "success": "comment is successfully added" });
});
exports.router.get('/getallcomments', (0, authentication_1.checktoken)(['admin', 'user']), async (req, res) => {
    console.log("helo");
    const allcomments = await fromcommentmodel.get_all();
    if (!allcomments) {
        return res.status(400).send({ "error": "failed to get the recipies" });
    }
    res.send(allcomments);
});
exports.router.delete('/deletecomment/:id', (0, authentication_1.checktoken)(['admin']), async (req, res) => {
    const { id } = req.params;
    const delet = fromcommentmodel.deleterecord(id);
    if (!delet) {
        return res.status(400).send({ "error": "not able to delete" });
    }
    return res.status(200).send({ "success": "successfully deleted" });
});
exports.router.patch('/updatecomment/:id', (0, authentication_1.checktoken)(['admin']), async (req, res) => {
    const { id } = req.params;
    const { commenttext, recipeid, userid } = req.body;
    const data = { commenttext, recipeid, userid };
    const updatecomment = await fromcommentmodel.update(data, id);
    console.log(updatecomment);
    if (!updatecomment) {
        return res.status(400).send({ "error": "not updated" });
    }
    res.status(200).send({ "success": "successfully updated" });
});
//# sourceMappingURL=comment-route.js.map