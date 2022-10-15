exports.up = function (knex) {
    return knex.schema.createTable('request', (table) => {
        table.increments('request_id').primary();
        // create attribute to store files
        table
        table.string('name');
        table.string('surname');
        table.string('id_number');
        table.string('phone');
        table.boolean('is_urgent');
        table.boolean('is_paid');
        table.bigInteger('document').references('document_id').inTable('document');
        table.bigInteger('user').references('user_id').inTable('users');
        table.timestamps(true, true);
    })
};

exports.down = function (knex) {
    return knex.raw('DROP TABLE request CASCADE');
};
