/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('recipeingredients',table=>{
        table.increments('id');
        table.integer('recipeid').references('recipies.id');
        table.integer('ingredientid').references('ingredients.id');
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('recipeingredients');s
};
