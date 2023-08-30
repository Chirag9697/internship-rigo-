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
exports.app = void 0;
//local
const auth = __importStar(require("./packages/authentication"));
const fromrecipemodel = __importStar(require("./packages/recipies"));
const fromcommentmodel = __importStar(require("./packages/comments"));
const fromlikemodel = __importStar(require("./packages/likes"));
const fromfavouriterecipe = __importStar(require("./packages/favourite-recipies"));
const fromingredientmodel = __importStar(require("./packages/ingredients"));
//lib
const knex_1 = __importDefault(require("knex"));
const express_1 = __importDefault(require("express"));
const knexfile_1 = require("../knexfile");
const objection_1 = require("objection");
exports.app = (0, express_1.default)();
const connection = knexfile_1.development;
const initial = "api/v1";
objection_1.Model.knex((0, knex_1.default)(connection));
exports.app.use(express_1.default.json());
exports.app.use(`/${initial}/auth`, auth.router);
exports.app.use(`/${initial}/recipies`, fromrecipemodel.router);
exports.app.use(`/${initial}/comments`, fromcommentmodel.router);
exports.app.use(`/${initial}/likes`, fromlikemodel.router);
exports.app.use(`/${initial}/recipies/favourites`, fromfavouriterecipe.router);
function addingredients() {
    const ingredient = ['rice', 'barley', 'wheat', 'water', 'aachar', 'kachar'];
    for (var i = 0; i < ingredient.length; i++) {
        fromingredientmodel.create({ ingredientname: ingredient[i] });
    }
    console.log('added all ingredient');
}
// addingredients();
exports.app.listen(3000, (req, res) => {
    console.log("listening on port 3000");
});
// module.exports=app;
//# sourceMappingURL=index.js.map