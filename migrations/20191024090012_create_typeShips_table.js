
exports.up = function(knex) {
    return knex.schema.createTable('typeShips',(table) => {
        table.increments().notNull().primary();
        table.string('name').unique().index();
    })
};

exports.down = function(knex) {
  
};
