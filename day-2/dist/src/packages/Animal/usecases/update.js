"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = void 0;
const Animal_1 = require("../domain/Animal");
const update = async (data) => {
    const newdata = { animalname: data.animalname };
    const person = await Animal_1.Animal.query().findById(data.idi).patch(newdata);
    // 
    //obj
    console.log(person);
};
exports.update = update;
//# sourceMappingURL=update.js.map