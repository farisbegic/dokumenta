exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('document').del()
    await knex('document').insert([
        {
            name: 'Odobrenje za građenje',
            price: 10,
            days_waiting: 10,
            municipality: Math.floor(Math.random() * 10) + 1
        },
        {
            name: 'Uklanjanje gradjevine',
            price: 10,
            days_waiting: 10,
            municipality: Math.floor(Math.random() * 10) + 1
        },
        {
            name: 'Odobrenje za istrazne radove',
            price: 10,
            days_waiting: 10,
            municipality: Math.floor(Math.random() * 10) + 1
        },
        {
            name: 'Izvod iz prostorno-planske dokumentacije',
            price: 10,
            days_waiting: 10,
            municipality: Math.floor(Math.random() * 10) + 1
        },
        {
            name: 'Uvjerenje o činjenicama o kojima se vodi /ne vodi službena evidencija',
            price: 10,
            days_waiting: 10,
            municipality: Math.floor(Math.random() * 10) + 1
        },
        {
            name: 'Produženje urbanističke saglasnosti / odobrenja za građenje',
            price: 10,
            days_waiting: 10,
            municipality: Math.floor(Math.random() * 10) + 1
        },
        {
            name: 'Urbanistička saglasnost ili lokacijska informacija',
            price: 10,
            days_waiting: 10,
            municipality: Math.floor(Math.random() * 10) + 1
        }
    ]);
};
