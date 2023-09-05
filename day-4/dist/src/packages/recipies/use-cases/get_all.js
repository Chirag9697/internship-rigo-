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
const recipies_1 = require("../domain/recipies");
const likes_1 = require("../../likes");
const fromusermodel = __importStar(require("../../users"));
const get_all = async (data, ownerid) => {
    const query = recipies_1.recipies.query();
    const { recipename } = data;
    // const{ownerid}=data;
    const page = parseInt(data.page);
    const limit = parseInt(data.limit);
    // const finalrecipie=query;
    var query2 = query;
    // console.log("users",user);
    if (ownerid) {
        const username = await fromusermodel.get_one(ownerid);
        query2 = query2.where('ownerid', '=', `${ownerid}`);
        // console.log(query2);
    }
    if (recipename) {
        query2 = query.where('recipename', 'LIKE', `%${recipename}%`);
    }
    var finalrecipies = await query2.page(page !== null && page !== void 0 ? page : 1, limit && 10);
    console.log("finalrecipies", finalrecipies);
    // const{ownerid}=finalrecipies.results;
    var finalrecipies2 = [];
    for (var i = 0; i < finalrecipies.results.length; i++) {
        const { ownerid } = finalrecipies.results[i];
        const user = await fromusermodel.get_one(ownerid);
        // try{
        // console.log("users",user);
        // }catch(error){
        // console.log("why error",error);
        // }
        // console.log("users",user.name);
        const nooflikes = await likes_1.likes.query().where('recipeid', '=', `${finalrecipies.results[i].id}`).count();
        const newresult = Object.assign(Object.assign({}, finalrecipies.results[i]), { username: user.name, nooflikes: nooflikes[0]['count(*)'] });
        finalrecipies2.push(newresult);
    }
    // const newfinalrecipies=finalrecipies.results.map(async(finalrecipe)=>{
    //     // const likes1=nooflikes['likes'];
    //     // console.log("nooflikes",nooflikes[0]['count(*)']);
    //     // console.log("nooflikes",{...finalrecipe});
    //     return(
    //         // ...finalrecipe,nooflikes=
    //     //    {...finalrecipe,nooflikes:nooflikes[0]['count(*)']}
    //     )
    // })
    // console.log(newfinalrecipies);
    return {
        recipies: finalrecipies2,
        page: data.page || 1,
        limit: data.limit || 10
    };
};
exports.get_all = get_all;
//# sourceMappingURL=get_all.js.map