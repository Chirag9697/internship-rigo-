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
//local
const auth = __importStar(require("./packages/authentication"));
const fromrecipemodel = __importStar(require("./packages/recipies"));
const fromcommentmodel = __importStar(require("./packages/comments"));
const fromlikemodel = __importStar(require("./packages/likes"));
const fromfavouriterecipe = __importStar(require("./packages/favourite-recipe"));
//lib
const knex_1 = __importDefault(require("knex"));
const express_1 = __importDefault(require("express"));
const knexfile_1 = require("../knexfile");
const objection_1 = require("objection");
const app = (0, express_1.default)();
const connection = knexfile_1.development;
objection_1.Model.knex((0, knex_1.default)(connection));
app.use(express_1.default.json());
app.use('/', auth.router);
app.use('/recipe', fromrecipemodel.router);
app.use('/comment', fromcommentmodel.router);
app.use('/likes', fromlikemodel.router);
app.use('/favouriterecipe', fromfavouriterecipe.router);
app.listen(3000, (req, res) => {
    console.log("listening on port 3000");
});
//# sourceMappingURL=index.js.map