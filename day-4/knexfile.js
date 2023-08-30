const { Knex } = require("knex")

module.exports = {
    development: {
        client: 'sqlite3',
        connection: {
            filename:"example.db"
            // host:'localhost',
            // user:"postgres",
            // port:"5432",
            // user:"chirag",
            // database: 'recipeweb',
            // password:'1234'
        },
        seeds:{
            directory:'./seeds'
        },
        useNullAsDefault: true,
        debug: true,
    },
    
}   