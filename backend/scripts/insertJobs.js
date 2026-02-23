const dotenv = require('dotenv');
const path = require('path');

// Load .env from backend root directory
dotenv.config({ path: path.join(__dirname, '..', '.env') });

const db = require('../config/db');

const jobs = [
  {
    title: 'Service Desk Application (Mac OS)',
    department: 'Network',
    location: 'Bengaluru',
    type: 'Full-time',
    experience: '1-3 years',
    description: 'Provide first-line support for macOS clients, resolve incidents, and assist end-users with hardware/software issues.'
  },
  {
    title: 'Desktop Engineer',
    department: 'Support',
    location: 'Bengaluru',
    type: 'Full-time',
    experience: '2-4 years',
    description: 'Maintain and troubleshoot desktop environments, image builds, software deployment and hardware lifecycle management.'
  },
  {
    title: 'Network Security Engineer',
    department: 'Network',
    location: 'Hyderabad',
    type: 'Full-time',
    experience: '3-6 years',
    description: 'Design, implement and support LAN/WAN, switch/router/firewall configurations and network monitoring.'
  },
  {
    title: 'Microsoft 365 & Azure Specialist',
    department: 'Cloud',
    location: 'Mumbai',
    type: 'Full-time',
    experience: '3-6 years',
    description: 'Design, deploy and manage Microsoft 365 and Azure services including tenant administration, migration and governance.'
  },
  {
    title: 'Team Lead / Operations Manager',
    department: 'Operations',
    location: 'Bengaluru',
    type: 'Full-time',
    experience: '5+ years',
    description: 'Lead a technical operations team, manage SLAs, coordinate projects and ensure smooth day-to-day service delivery.'
  },
  {
    title: 'Web Developer',
    department: 'Web Development',
    location: 'Bangalore',
    type: 'Contract',
    experience: '2 years',
    description: 'We are looking for a skilled and creative Web Developer to join our team. The ideal candidate will be responsible for designing, developing, and maintaining responsive, user-friendly websites and web applications.'
  },
  {
    title: 'Full Stack Developer',
    department: 'Web Development',
    location: 'Mysuru',
    type: 'Full-time',
    experience: '3 years',
    description: 'Develop full-stack web applications using modern technologies. Work with both frontend and backend technologies.'
  }
];

async function insertJobs() {
  try {
    for (const job of jobs) {
      const [result] = await db.query(
        'INSERT INTO job_openings (title, department, location, type, experience, description, is_active) VALUES (?, ?, ?, ?, ?, ?, true)',
        [job.title, job.department, job.location, job.type, job.experience, job.description]
      );
      console.log(`✅ Inserted job: ${job.title}`);
    }
    console.log('\n✅ All jobs inserted successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error inserting jobs:', error);
    process.exit(1);
  }
}

insertJobs();
