# cPanel Deployment Guide - Pacer Careers Backend

## Steps to Deploy on cPanel

### 1. **Upload Backend Files to cPanel**
   - Using File Manager or FTP client, navigate to `public_html/`
   - Create a folder named `backend`
   - Upload all files from your local backend directory EXCEPT:
     - `node_modules/` (will be installed on server)
     - `.env` (will be created on server)
   - Upload folders: `config/`, `middleware/`, `routes/`, `services/`, `scripts/`, `uploads/`
   - Upload files: `server.js`, `hash.js`, `package.json`, `.env.production.example`

### 2. **Create MySQL Database in cPanel**
   - Log in to cPanel
   - Go to **MySQL Databases**
   - Create a new database: `paceraut_careers` (or your preferred name)
   - Create a new user: `paceraut_u` with a strong password
   - Assign user to database with ALL privileges
   - Note down these credentials for .env file

### 3. **Update Database with Table Structure**
   - In cPanel, go to **phpMyAdmin**
   - Select your newly created database
   - Go to **Import** tab
   - Upload the `database.sql` file from `backend/config/` folder
   - Click **Import**
   - Run `insertJobs.js` script to add job data

### 4. **Setup Node.js App in cPanel**
   - Go to **Setup Node.js App** in cPanel
   - Click **Create Application**
   - Configure:
     - **Node.js version**: 18.x or higher (recommended 20.x)
     - **Application mode**: production
     - **Application root**: `/home/username/public_html/backend`
     - **Application URL**: Leave blank or set to custom
     - **Application startup file**: `server.js`
   - Click **Create**
   - cPanel will assign a port (usually 5000-5999)

### 5. **Configure Environment Variables**
   - Go to **Setup Node.js App**
   - Click **Edit** on your application
   - In the **Environment Variables** section, add:
     ```
     PORT=5000
     DB_HOST=localhost
     DB_USER=paceraut_u
     DB_PASSWORD=your_cpanel_password
     DB_NAME=paceraut_careers
     JWT_SECRET=your_secure_secret_key_here
     EMAIL_HOST=smtp.gmail.com
     EMAIL_PORT=587
     EMAIL_USER=pacerautomationcareer@gmail.com
     EMAIL_PASS=zyfgppispdpprgzd
     EMAIL_TO=pacerautomationcareer@gmail.com
     NODE_ENV=production
     ```
   - Click **Save**

### 6. **Install Dependencies**
   - In cPanel **Terminal** (or SSH):
     ```bash
     cd ~/public_html/backend
     npm install
     ```

### 7. **Populate Jobs Data (First Time Only)**
   - In Terminal:
     ```bash
     cd ~/public_html/backend
     node scripts/insertJobs.js
     ```
   - Verify jobs are inserted:
     ```bash
     node scripts/checkJobs.js
     ```

### 8. **Start the Application**
   - Go to cPanel **Setup Node.js App**
   - Click on your app and click **Start Application**
   - Status should show as "Running"

### 9. **Configure Frontend API URL**
   - In your frontend code (`src/pages/Career.jsx` and `src/services/api.js`):
   - Update API_URL to point to your backend:
     ```javascript
     const PROD_API_URL = 'https://pacerautomation.com/backend/api';
     ```
   - Or use the environment variable approach in `.env.production`:
     ```
     VITE_API_URL=https://pacerautomation.com/backend/api
     ```

### 10. **Test the Deployment**
   - Open browser and navigate to:
     ```
     https://yourdomain.com:assigned_port/api/jobs
     ```
   - Should return JSON with job listings
   - Test Apply Now functionality from Career page

### 11. **Setup Reverse Proxy (Optional but Recommended)**
   - To avoid exposing port numbers, setup an Apache reverse proxy
   - In cPanel **EasyApache** or create `.htaccess` in `public_html/backend/`:
     ```apache
     RewriteEngine On
     RewriteRule ^(.*)$ http://localhost:5000/$1 [P,L]
     ProxyPassReverse / http://localhost:5000/
     ```

## Troubleshooting

### App won't start
- Check Node.js version compatibility
- Check error logs in cPanel **Node.js App** section
- Verify .env variables are correct
- Check MySQL connection in Terminal: `npm run checkJobs`

### Database connection error
- Verify DB credentials in .env match cPanel MySQL
- Check MySQL is running
- Verify database tables exist

### CORS errors
- Ensure frontend domain is added to CORS whitelist in `server.js`
- Frontend must use HTTPS to access API

### Email not sending
- Verify Gmail credentials are correct
- Check if Gmail requires app-specific password
- Enable "Less secure app access" (deprecated) or use Gmail App Password

### Port conflicts
- If assigned port conflicts, contact hosting provider
- They can assign a different port

## Important Notes

1. **Keep .env secure** - Never commit `real .env` file to git
2. **Back up database regularly** using cPanel tools
3. **Monitor disk space** - uploads folder can grow
4. **Set up SSL** - Email configuration requires HTTPS
5. **Test thoroughly** after deployment before going live

## File Permissions

Ensure correct permissions in cPanel File Manager:
- `uploads/` folder: 755
- `uploads/resumes/` folder: 755
- `.env` file: 600
- Other files: 644
