"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleterecord = void 0;
const animal_1 = require("../domain/animal");
const deleterecord = async (id) => {
    const deleting = await animal_1.animal.query().deleteById(id);
    console.log(deleting);
    // console.log(allanimals);
};
exports.deleterecord = deleterecord;
//# sourceMappingURL=delete.js.map