exports.up = function (knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments('user_id').primary();
        table.string('name');
        table.string('surname');
        table.string('email');
        table.string('password');
        table.string('id_number');
        table.string('phone');
        table.bigInteger('role').references('role_id').inTable('role');
        table.bigInteger('municipality').references('municipality_id').inTable('municipality');
        table.timestamps(true, true);
    })
};

exports.down = function (knex) {
    return knex.raw('DROP TABLE users CASCADE');
};
