const mysql = require('mysql2');
const { loadEnv } = require('./env');

loadEnv();

// Create connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'pacer_careers',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Debug: Log connection details (password hidden for security)
console.log('📊 MySQL Connection Details:');
console.log('  Host:', process.env.DB_HOST || 'localhost');
console.log('  User:', process.env.DB_USER || 'root');
console.log('  Database:', process.env.DB_NAME || 'pacer_careers');
console.log('  Password set:', !!process.env.DB_PASSWORD ? 'Yes' : 'No');

// Get promise-based connection
const promisePool = pool.promise();

// Test connection
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('MySQL Database connected successfully');
  connection.release();
});

module.exports = promisePool;
