/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('animals', function (table) {
        table.increments('id');
        table.string('animalname',255).notNullable();
        table.integer('ownerid').references('persons.id');
        // table.string('last_name', 255).notNullable();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    knex.schema.dropTable("animals");
};
