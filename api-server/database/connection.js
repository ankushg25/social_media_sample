const {
    Pool
} = require('pg');

const queryString = new Pool({
    user: 'postgres',
    database: 'ankush_db',
    password: 'admin',
    host: "localhost",
    port: 5432
});

module.exports = queryString;