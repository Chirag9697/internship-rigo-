/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('comments',table=>{
        table.increments('id');
        table.string('commenttext').notNullable();
        table.integer('recipeid').references('recipies.id');
        table.integer('userid').references('users.id');
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
