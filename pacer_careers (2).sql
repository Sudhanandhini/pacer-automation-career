-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 05, 2025 at 01:29 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pacer_careers`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(20) DEFAULT 'admin',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `username`, `email`, `password`, `role`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'admin@pacerautomation.com', '$2a$10$AJIYOOL1ekSQJUG9Fhp3MOhDdP/0YXwA4f8b8l76lHTcQf/xOo3c2', 'admin', '2025-11-13 10:10:57', '2025-11-13 10:58:40');

-- --------------------------------------------------------

--
-- Table structure for table `job_applications`
--

CREATE TABLE `job_applications` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `position` varchar(255) NOT NULL,
  `qualification` varchar(255) NOT NULL,
  `experience` varchar(50) NOT NULL,
  `message` text DEFAULT NULL,
  `status` enum('pending','reviewed','shortlisted','rejected') DEFAULT 'pending',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `job_applications`
--

INSERT INTO `job_applications` (`id`, `name`, `email`, `phone`, `position`, `qualification`, `experience`, `message`, `status`, `created_at`, `updated_at`) VALUES
(1, 'sudha', 'test@gmail.com', '9865789638', 'Team Lead / Operations Manager', 'B.tech', '8', '', 'shortlisted', '2025-11-13 11:02:13', '2025-11-13 11:02:55'),
(2, 'mahesh', 'test@gmail.com', '9865789635', 'Windows Server & Application Specialist', 'B.tech', '2', '', 'reviewed', '2025-11-13 11:03:29', '2025-11-13 11:03:44'),
(3, 'mangai', 'mangai@gmial.com', '09863257415', 'Web developer', 'm.tech', '6', '', 'rejected', '2025-11-13 11:06:16', '2025-11-13 11:06:42'),
(5, 'Alar', 'mangai@gmial.com', '09863257415', 'Network Engineer', 'm.tech', '6', '', 'reviewed', '2025-11-14 07:11:50', '2025-11-24 11:22:27'),
(6, 'sudha', 'test@gmail.com', '46464649466', 'Web developer', 'test', 'test', '', 'shortlisted', '2025-11-14 07:55:42', '2025-11-14 11:10:07'),
(7, 'test', 'test@gmail.com', '46454643366', 'Microsoft 365 & Azure Specialist', 'test', 'test', '', 'pending', '2025-11-17 03:49:32', '2025-11-17 03:49:32'),
(9, 'test', 'test@gmail.com', '7896541230', 'Full stack developer', 'm.tech', '3', '', 'pending', '2025-11-24 11:47:27', '2025-11-24 11:47:27');

-- --------------------------------------------------------

--
-- Table structure for table `job_openings`
--

CREATE TABLE `job_openings` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `department` varchar(100) NOT NULL,
  `location` varchar(100) NOT NULL,
  `type` varchar(50) DEFAULT 'Full-time',
  `experience` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `is_active` tinyint(1) DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `job_openings`
--

INSERT INTO `job_openings` (`id`, `title`, `department`, `location`, `type`, `experience`, `description`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'Service Desk Application (Mac OS)', 'Network', 'Bengaluru', 'Full-time', '1-3 years', 'Provide first-line support for macOS clients, resolve incidents, and assist end-users with hardware/software issues.', 1, '2025-11-13 10:10:57', '2025-11-13 11:00:07'),
(2, 'Desktop Engineer', 'Support', 'Bengaluru', 'Full-time', '2-4 years', 'Maintain and troubleshoot desktop environments, image builds, software deployment and hardware lifecycle management.', 1, '2025-11-13 10:10:57', '2025-11-13 10:10:57'),
(3, 'Network Security Engineer', 'Network', 'Hyderabad', 'Full-time', '3-6 years', 'Design, implement and support LAN/WAN, switch/router/firewall configurations and network monitoring.', 1, '2025-11-13 10:10:57', '2025-11-14 07:24:45'),
(4, 'Microsoft 365 & Azure Specialist', 'Cloud', 'Mumbai', 'Full-time', '3-6 years', 'Design, deploy and manage Microsoft 365 and Azure services including tenant administration, migration and governance.', 1, '2025-11-13 10:10:57', '2025-11-13 10:10:57'),
(5, 'Team Lead / Operations Manager', 'Operations', 'Bengaluru', 'Full-time', '5+ years', 'Lead a technical operations team, manage SLAs, coordinate projects and ensure smooth day-to-day service delivery.', 1, '2025-11-13 10:10:57', '2025-11-13 10:10:57'),
(7, 'Web developer', 'Web development', 'bangalore', 'Contract', '2', 'We are looking for a skilled and creative Web Developer to join our team. The ideal candidate will be responsible for designing, developing, and maintaining responsive, user-friendly websites and web applications.', 1, '2025-11-13 11:05:37', '2025-11-13 11:05:37'),
(8, 'Full stack developer', 'Web development', 'Mysuru', 'Full-time', '3', 'Good', 1, '2025-11-24 11:46:13', '2025-11-24 11:46:13');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `job_applications`
--
ALTER TABLE `job_applications`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `job_openings`
--
ALTER TABLE `job_openings`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `job_applications`
--
ALTER TABLE `job_applications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `job_openings`
--
ALTER TABLE `job_openings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
