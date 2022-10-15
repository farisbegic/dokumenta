const knex = require('../db/db.js');

const findUserByEmail = async (email) => {
    const user = await knex('users').where({ email: email }).first();

    if (!user) {
        throw new Error('User not found');
    }

    return user;
}

const checkIfUserExists = async (email) => {
    const user = await knex('users').where({ email: email }).first();

    if (!user) {
        return false;
    }

    return true;
}

const createUser = async (user) => {
    const id = await knex('users').insert(user, 'user_id');

    if (!id) {
        throw new Error('User not created');
    }

    return id;
}
module.exports = {
    findUserByEmail,
    checkIfUserExists,
    createUser
}