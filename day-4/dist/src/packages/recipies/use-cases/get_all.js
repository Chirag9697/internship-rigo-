"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_all = void 0;
const recipies_1 = require("../domain/recipies");
const get_all = async (data) => {
    const query = recipies_1.recipies.query();
    const { recipename } = data;
    const page = parseInt(data.page);
    const limit = parseInt(data.limit);
    // const finalrecipie=query;
    var query2 = query;
    if (recipename) {
        query2 = query.where('recipename', 'LIKE', `%${recipename}%`);
    }
    const finalrecipies = await query2.page(page !== null && page !== void 0 ? page : 1, limit && 10);
    return {
        recipies: finalrecipies,
        page: data.page || 1,
        limit: data.limit || 10
    };
};
exports.get_all = get_all;
//# sourceMappingURL=get_all.js.map