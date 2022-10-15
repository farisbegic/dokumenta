const knex = require('../db/db.js');
const userRepository = require('../repository/userRepository.js');

const getDocumentsByUserId = async (user_id) => {
    await userRepository.checkUserById(user_id);

    return knex('request').where({user: user_id});
}

module.exports = {
    getDocumentsByUserId
}