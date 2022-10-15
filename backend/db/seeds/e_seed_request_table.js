exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('request').del()
    await knex('request').insert([
        {
            name: 'Hasna',
            surname: 'Begic',
            id_number: '1234567890123',
            phone: '387 62 200 199',
            is_urgent: false,
            is_paid: false,
            is_completed: false,
            document: Math.floor(Math.random() * 7) + 1,
            user: Math.floor(Math.random() * 3) + 1
        },
        {
            name: 'Amira',
            surname: 'Begic',
            id_number: '9089087',
            phone: '387 62 123 199',
            is_urgent: false,
            is_paid: false,
            is_completed: false,
            document: Math.floor(Math.random() * 7) + 1,
            user: Math.floor(Math.random() * 3) + 1
        },
        {
            name: 'Hamida',
            surname: 'Paric',
            id_number: '312412412',
            phone: '387 62 200 199',
            is_urgent: false,
            is_paid: false,
            is_completed: false,
            document: Math.floor(Math.random() * 7) + 1,
            user: Math.floor(Math.random() * 3) + 1
        },
        {
            name: 'Adna',
            surname: 'Paric',
            id_number: '904811290',
            phone: '387 62 200 909',
            is_urgent: false,
            is_paid: false,
            is_completed: false,
            document: Math.floor(Math.random() * 7) + 1,
            user: Math.floor(Math.random() * 3) + 1
        },
        {
            name: 'Azra',
            surname: 'Sose',
            id_number: '0982141',
            phone: '387 62 980 199',
            is_urgent: false,
            is_paid: false,
            is_completed: false,
            document: Math.floor(Math.random() * 7) + 1,
            user: Math.floor(Math.random() * 3) + 1
        },
        {
            name: 'Ajla',
            surname: 'Sose',
            id_number: '24142151251',
            phone: '387 61 200 199',
            is_urgent: false,
            is_paid: false,
            is_completed: false,
            document: Math.floor(Math.random() * 7) + 1,
            user: Math.floor(Math.random() * 3) + 1
        },
        {
            name: 'Dzenita',
            surname: 'Begic',
            id_number: '1234567890123',
            phone: '387 62 200 199',
            is_urgent: false,
            is_paid: false,
            is_completed: false,
            document: Math.floor(Math.random() * 7) + 1,
            user: Math.floor(Math.random() * 3) + 1
        },
    ]);
};
