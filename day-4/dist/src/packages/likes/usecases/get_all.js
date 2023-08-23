"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_all = void 0;
// import {Recipe} from '../domain/recipe';
const likes_1 = require("../domain/likes");
const get_all = async () => {
    const allikes = await likes_1.like.query();
    console.log(allikes);
    return allikes;
};
exports.get_all = get_all;
//# sourceMappingURL=get_all.js.map