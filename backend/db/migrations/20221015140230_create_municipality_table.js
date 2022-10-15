exports.up = function (knex) {
    return knex.schema.createTable('municipality', (table) => {
        table.increments('municipality_id').primary();
        table.string('name');
        table.string('value')
        table.timestamps(true, true);
    })
};

exports.down = function (knex) {
    return knex.raw('DROP TABLE municipality CASCADE');
};
