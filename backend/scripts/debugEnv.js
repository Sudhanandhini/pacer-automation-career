const dotenv = require('dotenv');
const path = require('path');

// Load .env from the backend directory
const envPath = path.join(__dirname, '..', '.env');
console.log('Looking for .env at:', envPath);

const result = dotenv.config({ path: envPath });

if (result.error) {
  console.error('❌ Error loading .env file:', result.error.message);
} else {
  console.log('✅ .env file loaded successfully');
}

console.log('\n=== Environment Variables ===');
console.log('DB_HOST:', process.env.DB_HOST || 'NOT SET');
console.log('DB_USER:', process.env.DB_USER || 'NOT SET');
console.log('DB_PASSWORD:', process.env.DB_PASSWORD ? '****' : 'NOT SET');
console.log('DB_NAME:', process.env.DB_NAME || 'NOT SET');
console.log('PORT:', process.env.PORT || 'NOT SET');
console.log('NODE_ENV:', process.env.NODE_ENV || 'NOT SET');
console.log('EMAIL_USER:', process.env.EMAIL_USER || 'NOT SET');
