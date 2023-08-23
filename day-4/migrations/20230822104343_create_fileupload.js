/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('fileupload',table=>{
        table.increments('id');
        table.string('recipeid').references('recipies.id');
        table.string('filename');
        // table.string('userid').references('users.id');
      })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('fileupload');
};