"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleterecord = void 0;
const Animal_1 = require("../domain/Animal");
const deleterecord = async (id) => {
    const deleting = await Animal_1.Animal.query().deleteById(id);
    console.log(deleting);
    // console.log(allpersons);
};
exports.deleterecord = deleterecord;
//# sourceMappingURL=delete.js.map