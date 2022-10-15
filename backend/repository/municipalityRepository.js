const knex = require('../db/db.js');

const getAllMunicipalities = async () => {
    return await knex('municipality');
}

module.exports = {
    getAllMunicipalities
}