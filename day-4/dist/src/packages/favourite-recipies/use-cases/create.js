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
const favourite_recipies_1 = require("../domain/favourite-recipies");
const fromusermodel = __importStar(require("../../users"));
const fromrecipemodel = __importStar(require("../../recipies"));
const create = async (data) => {
    const { recipeid, userid } = data;
    const found = fromusermodel.get_one(userid);
    if (!found) {
        throw new Error("user not found");
        return;
    }
    const recipefound = fromrecipemodel.get_one(recipeid);
    if (!recipefound) {
        throw new Error("recipe not found");
        return;
    }
    const data1 = { recipeid, userid };
    // const addedfavouriterecipe=fromfavouriterecipe.create(data);
    // if(!addedfavouriterecipe){
    // res.send({"failed":"there is  some errror"})
    // }
    // res.send({"success":"recipe added to favourite recipe"});
    const hel = await favourite_recipies_1.favouriterecipies.query().insert(data1);
    if (!hel) {
        throw new Error("not able to add to favourite recipe");
        return;
    }
    // console.log("insert=",hel);
    // return hel;
};
exports.create = create;
//# sourceMappingURL=create.js.map