"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_all = void 0;
const Animal_1 = require("../domain/Animal");
const get_all = async () => {
    const allanimals = await Animal_1.Animal.query();
    // console.log(await allanimals);
    return allanimals;
};
exports.get_all = get_all;
//# sourceMappingURL=get_all.js.map