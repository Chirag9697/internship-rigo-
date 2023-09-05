"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = void 0;
const recipies_1 = require("../domain/recipies");
const update = async (data, id) => {
    const hel = await recipies_1.recipies.query().findById(id).patch(data);
    if (!hel) {
        throw new Error('not able to update');
        return;
    }
};
exports.update = update;
//# sourceMappingURL=update.js.map