const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'db_gynvagas',
  password: '2001',
  port: 5432,
});

module.exports = pool;
