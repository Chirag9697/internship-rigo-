"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const objection_1 = require("objection");
const knex_1 = require("knex");
const db = () => {
    const knex = (0, knex_1.Knex)({
        client: 'sqlite3',
        useNullAsDefault: true,
        connection: {
            filename: 'example.db'
        }
    });
    objection_1.Model.knex(knex);
    console.log("connected to db");
    // createSchema()
    // .then(() => knex.destroy())
    // // .then(() => knex.destroy())
    // .catch(err => {
    //   console.error(err);
    //   return knex.destroy();
    // });
};
exports.db = db;
//# sourceMappingURL=db.js.map