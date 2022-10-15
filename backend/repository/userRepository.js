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

const checkUserById = async (user_id) => {
    const user = await knex('users').where({ user_id: user_id }).first();

    if (!user) {
        throw new Error('User not found');
    }

    return user;
}

const createUser = async (user) => {
    const id = await knex('users').insert(user, 'user_id');

    if (!id) {
        throw new Error('User not created');
    }

    return id;
}

const updateUser = async (user) => {
    await checkUserById(parseInt(user.user_id));

    const id = await knex('users').where({ user_id: user.user_id }).update(user, 'user_id');

    if (!id) {
        throw new Error('User not updated');
    }

    return id;
}

const getUserInformation = async (user_id) => {
    await checkUserById(user_id);

    const user = await knex('users')
        .select('user_id', 'name', 'surname', 'email', 'phone', 'id_number', 'municipality')
        .where({ user_id: user_id })
        .first();

    if (!user) {
        throw new Error('User not found');
    }

    return user;
}


module.exports = {
    findUserByEmail,
    checkIfUserExists,
    createUser,
    updateUser,
    getUserInformation
}