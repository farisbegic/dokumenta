exports.up = function (knex) {
    return knex.schema.createTable('document', (table) => {
        table.increments('document_id').primary();
        table.string('name');
        // create attribute to store files
        table.integer('price');
        table.integer('days_waiting');
        table.bigInteger('municipality').references('municipality_id').inTable('municipality');
        table.timestamps(true, true);
    })
};

exports.down = function (knex) {
    return knex.raw('DROP TABLE document CASCADE');
};
