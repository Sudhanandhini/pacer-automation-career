const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');
require('dotenv').config({ path: '../.env' });

async function checkAndFixAdmin() {
  const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'pacer_careers'
  });

  try {
    console.log('🔍 Checking admin record...\n');
    
    // Check if admin exists
    const [admins] = await pool.query('SELECT id, username, email, password FROM admins WHERE email = ?', ['admin@pacerautomation.com']);
    
    if (admins.length === 0) {
      console.log('❌ No admin found with email: admin@pacerautomation.com');
      console.log('📝 Creating new admin record...\n');
      
      // Hash password
      const plainPassword = 'admin123';
      const hashedPassword = await bcrypt.hash(plainPassword, 10);
      
      console.log(`Plain password: ${plainPassword}`);
      console.log(`Hashed password: ${hashedPassword}\n`);
      
      // Insert admin
      const [result] = await pool.query(
        'INSERT INTO admins (username, email, password, role) VALUES (?, ?, ?, ?)',
        ['admin', 'admin@pacerautomation.com', hashedPassword, 'admin']
      );
      
      console.log(`✅ Admin created successfully (ID: ${result.insertId})`);
      console.log('\n📌 Login credentials:');
      console.log('   Email: admin@pacerautomation.com');
      console.log('   Password: admin123\n');
    } else {
      console.log('✅ Admin found!\n');
      const admin = admins[0];
      console.log(`   ID: ${admin.id}`);
      console.log(`   Username: ${admin.username}`);
      console.log(`   Email: ${admin.email}`);
      console.log(`   Password Hash: ${admin.password}\n`);
      
      // Test if password 'admin123' matches the hash
      console.log('🔐 Testing password match for "admin123"...');
      const matches = await bcrypt.compare('admin123', admin.password);
      
      if (matches) {
        console.log('✅ Password matches! Login should work.\n');
      } else {
        console.log('❌ Password does NOT match. Updating with correct hash...\n');
        
        const hashedPassword = await bcrypt.hash('admin123', 10);
        await pool.query('UPDATE admins SET password = ? WHERE id = ?', [hashedPassword, admin.id]);
        
        console.log(`✅ Password updated successfully`);
        console.log(`New hash: ${hashedPassword}\n`);
        console.log('📌 Login credentials:');
        console.log('   Email: admin@pacerautomation.com');
        console.log('   Password: admin123\n');
      }
    }
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('   MySQL connection lost. Is the database running?');
    } else if (error.code === 'ER_ACCESS_DENIED_FOR_USER') {
      console.error('   MySQL authentication failed. Check DB_USER and DB_PASSWORD in .env');
    } else if (error.code === 'ER_BAD_DB_ERROR') {
      console.error('   Database not found. Create it first with: mysql -u root -e "CREATE DATABASE pacer_careers;"');
    }
  } finally {
    await pool.end();
  }
}

checkAndFixAdmin();
