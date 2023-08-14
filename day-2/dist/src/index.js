"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const knexfile_js_1 = require("../knexfile.js");
const index_js_1 = require("./packages/Person/index.js");
const knex_1 = require("knex");
const connection = knexfile_js_1.development;
objection_1.Model.knex((0, knex_1.default)(connection));
async function main() {
    const data = { first_name: "chirag" };
    console.log("creating new data");
    await (0, index_js_1.create)(data);
    console.log("getting all the data");
    // console.log(get_all())
    await (0, index_js_1.get_all)();
    const data2 = { idi: 27, first_name: 'rohanram' };
    console.log("updating a record");
    await (0, index_js_1.update)(data2);
    console.log("getting all the records");
    await (0, index_js_1.get_all)();
    console.log("deleting a record");
    await (0, index_js_1.deleterecord)(27);
    console.log("getting all the records");
    await (0, index_js_1.get_all)();
    console.log("getting a record with id 1");
    await (0, index_js_1.get_one)(11);
}
main();
//# sourceMappingURL=index.js.map