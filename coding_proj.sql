-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 18, 2024 at 05:39 PM
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
-- Database: `coding_proj`
--

-- --------------------------------------------------------

--
-- Table structure for table `rent`
--

CREATE TABLE `rent` (
  `RentID` int(3) NOT NULL,
  `Location` text NOT NULL,
  `Date` date NOT NULL,
  `Name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `rent`
--

INSERT INTO `rent` (`RentID`, `Location`, `Date`, `Name`) VALUES
(1, 'Tampines Hub', '2024-07-16', 'Praveen'),
(2, 'Jurong East', '2024-07-02', 'Bazel'),
(4, 'Northpoint', '2024-07-06', 'Gavin');

-- --------------------------------------------------------

--
-- Table structure for table `workout`
--

CREATE TABLE `workout` (
  `RecordID` int(10) NOT NULL,
  `GymExerciseType` varchar(30) NOT NULL,
  `TotalSets` int(3) NOT NULL,
  `Date` date NOT NULL,
  `Name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `workout`
--

INSERT INTO `workout` (`RecordID`, `GymExerciseType`, `TotalSets`, `Date`, `Name`) VALUES
(1, 'Squads ', 30, '2024-07-03', 'Praveen'),
(2, 'Bicep curls', 20, '2024-07-15', 'Bazel'),
(3, 'pull ups', 20, '2024-07-11', 'Gavin'),
(4, 'bench press', 10, '2024-07-03', 'Iman');

-- --------------------------------------------------------

--
-- Table structure for table `workoutsss`
--

CREATE TABLE `workoutsss` (
  `Name` varchar(30) NOT NULL,
  `Gym exercises types` varchar(30) NOT NULL,
  `Total sets` int(3) NOT NULL,
  `Date&Time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `rent`
--
ALTER TABLE `rent`
  ADD PRIMARY KEY (`RentID`);

--
-- Indexes for table `workout`
--
ALTER TABLE `workout`
  ADD PRIMARY KEY (`RecordID`);

--
-- Indexes for table `workoutsss`
--
ALTER TABLE `workoutsss`
  ADD PRIMARY KEY (`Name`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `rent`
--
ALTER TABLE `rent`
  MODIFY `RentID` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `workout`
--
ALTER TABLE `workout`
  MODIFY `RecordID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
