-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 31, 2026 at 12:11 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `FlowerTypes`
--

-- --------------------------------------------------------

--
-- Table structure for table `Flowers`
--

CREATE TABLE `Flowers` (
  `ID` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Flowers`
--

INSERT INTO `Flowers` (`ID`, `name`, `description`, `image`) VALUES
(2, 'Lavender', 'The commonly cultivated lavender is the common or English lavender Lavandula angustifolia (formerly L. officinalis), which is hardy to USDA Zone 5. A bushy perennial, lavender grows from 1 to 3 feet tall, bearing small blue-violet flowers on spikes with blue-green, needle-like foliage. The oils in the flowers give the herb its distinctive balsam-like fragrance.', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.flyingflowers.co.uk%2Fi%2Fflyingflowers%2Flavender-bloom-1.jpg%3F%24poi-square%24%26fmt%3Dauto%26qlt%3Ddefault%26fmt.jp2.qlt%3D60%26bg%3Drgb(255%252C%2B255%252C%2B255)%26w%3D1608%26aspect%3D1%3A1&f=1&nofb=1&ipt=4335cb414a37367e09f7c8574c9119b846e79069e572e8dcccfdb84cb12f82b1'),
(3, 'Poppy', 'A poppy flower is a colorful flowering plant belonging to the family Papaveraceae, known for its vibrant blooms and various species, including the opium poppy, which is used for medicinal purposes. Poppies are often grown in gardens and symbolize remembrance, particularly in relation to fallen soldiers.', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcff2.earth.com%2Fuploads%2F2019%2F02%2F10121232%2FPoppy-flowers-are-bright-and-splashy-%25E2%2580%2593-heres-why.jpg&f=1&nofb=1&ipt=7700f521ac5086f615e8b3604a606d16b966c102b214bf15e6b9c700927c9dc0');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Flowers`
--
ALTER TABLE `Flowers`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Flowers`
--
ALTER TABLE `Flowers`
  MODIFY `ID` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
