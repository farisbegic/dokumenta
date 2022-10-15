const config = require("../config");

module.exports = {
    development: {
        client: config.database.client,
        connection: {
            database: config.database.name,
            user: config.database.user,
            password: config.database.password,
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    },
    staging: {
        client: 'postgresql',
        connection: {
            database: 'my_db',
            user: 'username',
            password: 'password'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    },

    production: {
        client: 'postgresql',
        connection: {
            database: 'my_db',
            user: 'username',
            password: 'password'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    }
};
