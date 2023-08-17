"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const animal_1 = require("../domain/animal");
const create = async (data) => {
    // console.log("create");
    const hel = await animal_1.animal.query().insert(data);
    console.log(await hel);
};
exports.create = create;
//# sourceMappingURL=create.js.map