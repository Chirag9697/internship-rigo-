"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_one = void 0;
const Animal_1 = require("../domain/Animal");
const get_one = async (id) => {
    const person = await Animal_1.Animal.query().findById(id);
    console.log(await Animal_1.Animal);
};
exports.get_one = get_one;
//# sourceMappingURL=get_one.js.map