"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const use_cases_1 = require("../use-cases");
const router = express_1.default.Router();
// const generatepdf=require('./usecases/generatepdf');
router.post('/pdf-service', async (req, res) => {
    console.log("hello");
    const pdf = await (0, use_cases_1.generatepdf)(req.body);
    res.send(pdf);
});
module.exports = router;
//# sourceMappingURL=route.js.map