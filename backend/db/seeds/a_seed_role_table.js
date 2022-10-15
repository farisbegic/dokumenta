exports.seed = async function(knex) {
  await knex('role').del()
  await knex('role').insert([
    {
      name: 'admin',
    },
    {
      name: 'user',
    }
  ]);
};
