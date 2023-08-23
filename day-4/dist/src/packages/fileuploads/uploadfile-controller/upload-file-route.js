"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
exports.router = express_1.default.Router();
const upload = (0, multer_1.default)({ dest: 'uploads/' });
//# sourceMappingURL=upload-file-route.js.map