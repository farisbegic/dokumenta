const knex = require('../db/db.js');

const findRoleById = async (id) => {
    const role = await knex('role').where({ id: id }).first();

    if (!role) {
        return null;
    }

    return role;
}

const getRoles = async () => {
    const roles = await knex('role');

    if (!roles) {
        return null;
    }

    return roles;
}

module.exports = {
    findRoleById,
    getRoles
}