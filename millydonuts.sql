-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 23, 2023 at 05:13 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `millydonuts`
--

-- --------------------------------------------------------

--
-- Table structure for table `produk`
--

CREATE TABLE `produk` (
  `id_produk` int(4) NOT NULL,
  `nama_produk` varchar(50) NOT NULL,
  `harga` bigint(20) NOT NULL,
  `jenis_produk` varchar(30) NOT NULL,
  `gambar` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `produk`
--

INSERT INTO `produk` (`id_produk`, `nama_produk`, `harga`, `jenis_produk`, `gambar`) VALUES
(1001, 'Donat', 3500, 'donat', 'donat coklat.png'),
(1002, 'Donat ', 20000, 'donat', 'donat-5.png'),
(1003, 'Bomboloni', 4500, 'bomboloni', 'bomboloni coklat.png'),
(1004, 'Bomboloni', 25000, 'bomboloni', 'bomboloni kotak.png'),
(1005, 'Donat Pop', 22500, 'donat pop', 'donat pop kecil.png'),
(1006, 'Donat Pop Besar', 43000, 'donat pop', 'donat pop besar.png'),
(1007, 'Hampers Donat ', 42000, 'hampers', 'donat hampers.png'),
(1008, 'Hampers Bomboloni ', 45000, 'hampers', 'bomboloni hamperst.png'),
(1009, 'Hampers Donat Pop + Tulisan ', 45000, 'hampers', 'donat pop hampers.png'),
(1010, 'Hampers Donat Pop ', 45000, 'hampers', 'donat pop hampers 2.png ');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `produk`
--
ALTER TABLE `produk`
  ADD PRIMARY KEY (`id_produk`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
