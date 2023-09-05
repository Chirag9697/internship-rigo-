"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_all = void 0;
const animal_1 = require("../domain/animal");
const get_all = async () => {
    const allanimals = await animal_1.animal.query();
    console.log(allanimals);
    // return allanimals;
};
exports.get_all = get_all;
//# sourceMappingURL=get_all.js.map