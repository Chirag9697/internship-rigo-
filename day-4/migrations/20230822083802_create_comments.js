/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('comments',table=>{
        table.increments('id');
        table.string('commenttext').notNullable();
        table.string('recipeid').references('recipies.id');
        table.string('userid').references('users.id');
        // table.string('instruction').notNullable();
        // table.string('ownerid').references('users.id');
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('comments');
};
