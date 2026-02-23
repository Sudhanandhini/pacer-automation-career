const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

let envLoaded = false;

const getCandidatePaths = () => {
  const root = path.join(__dirname, '..');

  if (process.env.DOTENV_CONFIG_PATH) {
    return [process.env.DOTENV_CONFIG_PATH];
  }

  if (process.env.NODE_ENV === 'production') {
    return [
      path.join(root, '.env.production'),
      path.join(root, '.env.cpanel'),
      path.join(root, '.env')
    ];
  }

  return [
    path.join(root, '.env.local'),
    path.join(root, '.env')
  ];
};

const loadEnv = () => {
  if (envLoaded) return;

  const envPath = getCandidatePaths().find((candidate) => fs.existsSync(candidate));

  if (envPath) {
    dotenv.config({ path: envPath, override: false });
    console.log(`Environment loaded from: ${envPath}`);
  } else {
    dotenv.config();
    console.warn('No explicit env file found. Falling back to dotenv default lookup.');
  }

  envLoaded = true;
};

module.exports = { loadEnv };
