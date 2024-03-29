const mysql = require('mysql2/promise');

// Replace placeholders with your actual credentials (store securely)
const DB_HOST = 'localhost';
const DB_USER = 'dev';
const DB_PASSWORD = 'host';
const DB_NAME = 'your_database_name';

const connectionPool = mysql.createPool({
  host: DB_HOST,
  user: DB_USER(),
  password: DB_HOST,
  database: DB_NAME,
});

module.exports = connectionPool;
