"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_one = void 0;
const animal_1 = require("../domain/animal");
const get_one = async (id) => {
    const animals = await animal_1.animal.query().findById(id);
    console.log(await animals);
};
exports.get_one = get_one;
//# sourceMappingURL=get_one.js.map