const knex = require('knex') ({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'hugo',
        database: 'postgres'
    }
})

module.exports = knex