"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = void 0;
const animal_1 = require("../domain/animal");
const update = async (data) => {
    const newdata = { animalname: data.animalname };
    const person = await animal_1.animal.query().findById(data.idi).patch(newdata);
    // 
    //obj
    console.log(person);
};
exports.update = update;
//# sourceMappingURL=update.js.map