
exports.up = function(knex) {
    return knex.schema.createTable('requests', (table) => {
        table.increments();
        table.integer('customerId').notNull().unsigned();
        table.integer('typeShipId').notNull().unsigned();
        table.string('note', 100);
        table.string('start', 100);
        table.string('end', 100);
        table.integer('length',100);
        table.string('cost', 100);
        table.integer('acceptBy').notNull().unsigned();
        table.timestamp(true, true);

        table.foreign('customerId').references('id').inTable('customers');
        table.foreign('acceptBy').references('id').inTable('shippers');
        table.foreign('typeShipId').references('id').inTable('typeShips');
    })
};

exports.down = function(knex) {

};
