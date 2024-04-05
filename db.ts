import mysql2 from 'mysql2/promise';

// Replace placeholders with your actual credentials (store securely)
const DB_HOST = 'localhost';
const DB_USER = 'dev';
const DB_PASSWORD = 'host';
const DB_NAME = 'your_database_name';

// Interface for Connection Pool Options
interface ConnectionPoolOptions {
  host: string;
  user: string;
  password: string;
  database: string;
}

// Create a Connection Pool with type safety
const connectionPool: mysql2.Pool = mysql2.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

export default connectionPool; // Use export default for default export
