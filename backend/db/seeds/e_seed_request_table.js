exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('request').del()
    await knex('request').insert([
        {
            name: 'Dzenita',
            surname: 'Begic',
            id_number: '1234567890123',
            phone: '387 62 200 199',
            is_urgent: false,
            is_paid: false,
            document: Math.floor(Math.random() * 7) + 1,
            user: Math.floor(Math.random() * 3) + 1
        }
    ]);
};
