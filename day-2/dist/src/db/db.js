import { Model } from "objection";
import { Knex } from "knex";
export const db = () => {
    const knex = Knex({
        client: 'sqlite3',
        useNullAsDefault: true,
        connection: {
            filename: 'example.db'
        }
    });
    Model.knex(knex);
    console.log("connected to db");
    // createSchema()
    // .then(() => knex.destroy())
    // // .then(() => knex.destroy())
    // .catch(err => {
    //   console.error(err);
    //   return knex.destroy();
    // });
};
