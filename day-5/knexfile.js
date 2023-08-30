const { Knex } = require("knex")

module.exports = {
    development: {
        client: 'sqlite3',
        connection: {
            filename: 'example.db'
        },
        seeds:{
            directory:'./seeds'
        },
        useNullAsDefault: true,
        debug: true,
    },

}   