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
const fromfavouriterecipe = __importStar(require("../../favourite-recipe"));
const check_token_1 = require("../../../utils/check-token");
exports.router = express_1.default.Router();
// const upload=multer({dest:'uploads/'});
exports.router.post('/addfavouriterecipe', (0, check_token_1.checktoken)(['admin', 'user']), async (req, res) => {
    const { recipeid, userid } = req.body;
    const found = fromusermodel.get_one(userid);
    if (!found) {
        return res.send({ "failed": "user not found" });
    }
    const recipefound = fromrecipemodel.get_one(recipeid);
    if (!recipefound) {
        return res.send({ "failed": "recipe not found" });
    }
    const data = { recipeid, userid };
    const addedfavouriterecipe = fromfavouriterecipe.create(data);
    if (!addedfavouriterecipe) {
        res.send({ "failed": "there is  some errror" });
    }
    res.send({ "success": "recipe added to favourite recipe" });
});
exports.router.get('/getallfavouriterecipe', (0, check_token_1.checktoken)(['admin', 'user']), async (req, res) => {
    console.log("hello");
    const favouriterecipe = await fromfavouriterecipe.get_all();
    res.send(favouriterecipe);
});
exports.router.delete('/deletefavouriterecipe/:id', (0, check_token_1.checktoken)(['admin', 'user']), async (req, res) => {
    const { id } = req.params;
    const delet = fromfavouriterecipe.deleterecord(id);
    if (!delet) {
        return res.status(400).send({ "error": "not able to delete" });
    }
    return res.status(200).send({ "success": "successfully deleted" });
});
//# sourceMappingURL=favourite-recipe-route.js.map