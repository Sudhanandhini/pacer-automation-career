# cPanel Deployment Checklist

## Pre-Deployment (Local)
- [ ] Test backend locally with `npm run dev`
- [ ] Verify all job openings show in API response
- [ ] Test Apply Now functionality works
- [ ] Check .env file has correct local credentials
- [ ] Ensure `.env` is in `.gitignore`
- [ ] Remove `node_modules/` from upload

## File Upload to cPanel
- [ ] Upload `/config` folder
- [ ] Upload `/middleware` folder  
- [ ] Upload `/routes` folder
- [ ] Upload `/scripts` folder
- [ ] Upload `/services` folder
- [ ] Upload `/uploads` folder
- [ ] Upload `server.js`
- [ ] Upload `hash.js`
- [ ] Upload `package.json`
- [ ] Upload `.env.production.example` (rename to `.env` and edit on server)

## cPanel Configuration
- [ ] Create MySQL database (note the full name)
- [ ] Create MySQL user (note username and password)
- [ ] Assign user to database with full privileges
- [ ] Import `database.sql` in phpMyAdmin
- [ ] Create Node.js app in Setup Node.js App section
- [ ] Note the assigned port number

## Environment Setup
- [ ] SSH/Terminal into server
- [ ] Navigate to `~/public_html/backend`
- [ ] Create `.env` file with production credentials
- [ ] Run `npm install`
- [ ] Run `node scripts/insertJobs.js` (first time only)
- [ ] Verify with `node scripts/checkJobs.js`

## Application Setup
- [ ] Start Node.js app in cPanel
- [ ] Verify app shows "Running" status
- [ ] Test API endpoint: `https://domain.com:port/api/jobs`
- [ ] Check response returns 7 jobs

## Frontend Configuration
- [ ] Update API URLs in Career.jsx
- [ ] Update API URLs in api.js
- [ ] Set VITE_API_URL in .env.production
- [ ] Build and deploy frontend

## Final Testing
- [ ] Open Career page in browser
- [ ] Verify "Apply Now" buttons appear
- [ ] Click "Apply Now" and submit test application
- [ ] Verify application appears in admin dashboard
- [ ] Test admin login
- [ ] Test email notifications received

## Post-Deployment
- [ ] Setup SSL certificate
- [ ] Configure reverse proxy (optional)
- [ ] Setup automated backups
- [ ] Monitor logs for errors
- [ ] Document any custom configurations
