exports.seed = async function(knex) {
  await knex('municipality').del()
  await knex('municipality').insert([
    {
      name: 'Centar',
      value: 'centar'
    },
    {
      name: 'Hadzici',
      value: 'hadzici'
    },
    {
      name: 'Ilidza',
      value: 'ilidza'
    },
    {
      name: 'Ilijas',
      value: 'ilijas'
    },
    {
      name: 'Novi Grad',
      value: 'novi_grad'
    },
    {
      name: 'Novo Sarajevo',
      value: 'novo_sarajevo'
    },
    {
      name: 'Hadzici',
      value: 'hadzici'
    },
    {
      name: 'Stari Grad',
      value: 'stari_grad'
    },
    {
      name: 'Trnovo',
      value: 'trnovo'
    },
    {
      name: 'Vogosca',
      value: 'vogosca'
    },
  ]);
};
