/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('recipies',table=>{
        table.increments('id');
        table.string('recipename').notNullable();
        table.string('cookingtime').notNullable();
        table.string('description').notNullable();
        table.string('instruction').notNullable();
        table.string('filename');
        // table.integer('nooflikes')
        table.integer('ownerid').references('users.id');
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('recipies');
};
