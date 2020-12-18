-- phpMyAdmin SQL Dump
-- version 4.9.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 19, 2020 at 10:19 AM
-- Server version: 10.3.23-MariaDB-cll-lve
-- PHP Version: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dangovco_userum_1`
--

-- --------------------------------------------------------

--
-- Table structure for table `economy`
--

CREATE TABLE `economy` (
  `author` varchar(216) DEFAULT NULL,
  `title` varchar(215) DEFAULT NULL,
  `id` int(145) NOT NULL,
  `description` varchar(260) DEFAULT NULL,
  `url` varchar(155) DEFAULT NULL,
  `urlToImage` varchar(227) DEFAULT NULL,
  `publishedAt` varchar(20) DEFAULT NULL,
  `content` varchar(215) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `economy`
--


--
-- Indexes for table `economy`
--
ALTER TABLE `economy`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `economy`
--
ALTER TABLE `economy`
  MODIFY `id` int(145) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2248;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
