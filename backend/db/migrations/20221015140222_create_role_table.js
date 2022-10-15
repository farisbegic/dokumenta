exports.up = function (knex) {
    return knex.schema.createTable('role', (table) => {
        table.increments('role_id').primary();
        table.string('name')
        table.timestamps(true, true);
    })
};

exports.down = function (knex) {
    return knex.raw('DROP TABLE role CASCADE');
};
