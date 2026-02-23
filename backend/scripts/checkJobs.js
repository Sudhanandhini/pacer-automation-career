const dotenv = require('dotenv');
const path = require('path');

// Load .env from backend root directory
dotenv.config({ path: path.join(__dirname, '..', '.env') });

const db = require('../config/db');

async function checkJobs() {
  try {
    const [rows] = await db.query('SELECT * FROM job_openings');
    console.log('Total jobs in DB:', rows.length);
    console.log(rows);
    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

checkJobs();
