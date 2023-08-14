"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatepdf = void 0;
const puppeteer_1 = __importDefault(require("puppeteer"));
const generatepdf = async (data) => {
    console.log(data);
    const browser = await puppeteer_1.default.launch({ headless: true });
    const page = await browser.newPage();
    const placeholderRegex = /{([^}]+)}/g;
    const replacedHtml = data.html.replace(placeholderRegex, (match, placeholder) => {
        if (placeholder) {
            if (!data.data[`${placeholder}`]) {
                return '';
            }
            else {
                return data.data[`${placeholder}`];
            }
        }
        else {
            return match;
        }
    });
    console.log(replacedHtml);
    await page.setContent(replacedHtml);
    // console.log(req.body.html);
    const pdf = await page.pdf({ format: 'A4' });
    // res.send("hello");
    return pdf;
};
exports.generatepdf = generatepdf;
//# sourceMappingURL=generatepdf.js.map