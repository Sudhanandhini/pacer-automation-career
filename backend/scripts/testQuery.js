const dotenv = require('dotenv');
const path = require('path');

// Load .env from backend root directory
dotenv.config({ path: path.join(__dirname, '..', '.env') });

const db = require('../config/db');

async function testQuery() {
  try {
    const [rows] = await db.query(
      'SELECT * FROM job_openings WHERE is_active = true ORDER BY created_at DESC'
    );
    console.log('Jobs returned from query:', rows.length);
    console.log(rows);
    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

testQuery();
