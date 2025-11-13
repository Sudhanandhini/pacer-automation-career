// backend/scripts/createAdmin.js
// Helper script to create/update admin user with bcrypt-hashed password

const bcrypt = require('bcryptjs');
const mysql = require('mysql2');
require('dotenv').config();

// Database config
const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'pacer_careers'
});

async function createAdmin() {
  const email = 'admin@pacerautomation.com';
  const plainPassword = 'admin123'; // Change this to your desired password
  
  try {
    // Hash password with bcryptjs (rounds = 10, matches database hash)
    const hashedPassword = await bcrypt.hash(plainPassword, 10);
    
    console.log('Creating/Updating admin user...');
    console.log('Email:', email);
    console.log('Password (plain):', plainPassword);
    console.log('Password (hash):', hashedPassword);
    
    // SQL to insert or update admin
    const sql = `
      INSERT INTO admins (username, email, password, role) 
      VALUES ('admin', ?, ?, 'admin')
      ON DUPLICATE KEY UPDATE 
        password = VALUES(password),
        updated_at = CURRENT_TIMESTAMP
    `;
    
    connection.query(sql, [email, hashedPassword], (err, results) => {
      if (err) {
        console.error('Error:', err);
        process.exit(1);
      }
      
      console.log('\n✅ Admin user created/updated successfully!');
      console.log('You can now login with:');
      console.log(`  Email: ${email}`);
      console.log(`  Password: ${plainPassword}`);
      
      connection.end();
      process.exit(0);
    });
  } catch (err) {
    console.error('Error hashing password:', err);
    process.exit(1);
  }
}

createAdmin();
