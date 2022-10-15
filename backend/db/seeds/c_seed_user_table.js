exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('users').del()
    await knex('users').insert([
        {
            name: 'Faris',
            surname: 'Begic',
            email: 'fabegic@gmail.com',
            password: '$2a$10$bLS2tLQuBtO/z137fYmzKeBb/FXEiWHw9LeyozlJ1g7DoTmjrd21O',
            id_number: '1234567890123',
            phone: '387 62 459 199',
            role: Math.floor(Math.random() * 2) + 1,
            municipality: Math.floor(Math.random() * 10) + 1
        },
        {
            name: 'Amar',
            surname: 'Sose',
            email: 'amsose@gmail.com',
            password: '$2a$10$bLS2tLQuBtO/z137fYmzKeBb/FXEiWHw9LeyozlJ1g7DoTmjrd21O',
            id_number: '1234567890123',
            phone: '387 62 459 199',
            role: Math.floor(Math.random() * 2) + 1,
            municipality: Math.floor(Math.random() * 10) + 1
        },
        {
            name: 'Irfan',
            surname: 'Paric',
            email: 'fabegic@gmail.com',
            password: '$2a$10$bLS2tLQuBtO/z137fYmzKeBb/FXEiWHw9LeyozlJ1g7DoTmjrd21O',
            id_number: '1234567890123',
            phone: '387 62 459 199',
            role: Math.floor(Math.random() * 2) + 1,
            municipality: Math.floor(Math.random() * 10) + 1
        }
    ]);
};
