-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 01, 2025 at 05:46 PM
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
-- Database: `bolt_fitness`
--

-- --------------------------------------------------------

--
-- Table structure for table `daily_intakes`
--

CREATE TABLE `daily_intakes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `date` date NOT NULL,
  `daily_calories` int(11) NOT NULL DEFAULT 0,
  `daily_protein` int(11) NOT NULL DEFAULT 0,
  `daily_water` double(8,2) NOT NULL DEFAULT 0.00,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `daily_carbs` int(11) NOT NULL DEFAULT 0,
  `daily_fats` int(11) NOT NULL DEFAULT 0,
  `foods` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`foods`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `daily_intakes`
--

INSERT INTO `daily_intakes` (`id`, `user_id`, `date`, `daily_calories`, `daily_protein`, `daily_water`, `created_at`, `updated_at`, `daily_carbs`, `daily_fats`, `foods`) VALUES
(2, 1, '2025-02-25', 16868, 823, 0.00, '2025-02-25 15:06:46', '2025-02-25 16:37:11', 1692, 762, '[{\"foodname\":\"500g of steak\"},{\"foodname\":\"200g of rice\"},{\"foodname\":\"300g of oats\"},{\"foodname\":\"300g of oats\"},{\"foodname\":\"500g of pasta\"},{\"foodname\":\"500g of cheese\"},{\"foodname\":\"500g of cheese\"},{\"foodname\":\"500g of cheese\"},{\"foodname\":\"3 eggs\"},{\"foodname\":\"3 eggs\"},{\"foodname\":\"1kg of oats\"},{\"foodname\":\"500g of oats\"}]'),
(3, 2, '2025-02-25', 273, 26, 0.00, '2025-02-25 18:14:41', '2025-02-25 18:14:41', 0, 19, '[{\"foodname\":\"500of steak\"}]'),
(4, 1, '2025-02-27', 7426, 412, 0.00, '2025-02-27 14:25:30', '2025-02-27 17:28:05', 895, 243, '[{\"foodname\":\"500g of steak\"},{\"foodname\":\"500g of oats\"},{\"foodname\":\"200g of pasta\"},{\"foodname\":\"500g of steak\"},{\"foodname\":\"500g of rice\"},{\"foodname\":\"200g of oats\"},{\"foodname\":\"200g of rice\"},{\"foodname\":\"500g of pasta\"}]'),
(5, 3, '2025-02-27', 2294, 114, 0.01, '2025-02-27 17:47:30', '2025-02-27 19:29:41', 327, 60, '[{\"foodname\":\"500g of pasta\"},{\"foodname\":\"250g of oats\"},{\"foodname\":\"200g of steak\"}]'),
(6, 1, '2025-03-01', 1160, 40, 0.00, '2025-03-01 14:48:29', '2025-03-01 14:48:29', 204, 20, '[{\"foodname\":\"300g of oats\"}]');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `food_entries`
--

CREATE TABLE `food_entries` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `foodname` varchar(255) NOT NULL,
  `calories` int(11) NOT NULL,
  `protein` int(11) NOT NULL,
  `carbs` int(11) NOT NULL,
  `fat` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `food_entries`
--

INSERT INTO `food_entries` (`id`, `user_id`, `foodname`, `calories`, `protein`, `carbs`, `fat`, `created_at`, `updated_at`) VALUES
(1, 1, 'steak', 1367, 130, 0, 94, '2025-02-25 14:47:44', '2025-02-25 14:47:44'),
(2, 1, 'rice', 382, 8, 85, 1, '2025-02-25 14:49:46', '2025-02-25 14:49:46'),
(3, 1, 'lasagna', 473, 34, 28, 26, '2025-02-25 14:52:16', '2025-02-25 14:52:16'),
(4, 1, 'pizza', 1315, 57, 164, 49, '2025-02-25 14:57:28', '2025-02-25 14:57:28'),
(5, 1, 'oats', 1934, 66, 340, 33, '2025-02-25 14:57:59', '2025-02-25 14:57:59'),
(6, 1, 'steak', 1367, 130, 0, 94, '2025-02-25 15:04:12', '2025-02-25 15:04:12'),
(7, 1, 'steak', 1367, 130, 0, 94, '2025-02-25 15:06:46', '2025-02-25 15:06:46'),
(8, 1, 'rice', 255, 5, 57, 1, '2025-02-25 15:12:40', '2025-02-25 15:12:40'),
(9, 1, 'oats', 1160, 40, 204, 20, '2025-02-25 15:28:57', '2025-02-25 15:28:57'),
(10, 1, 'oats', 1160, 40, 204, 20, '2025-02-25 15:29:58', '2025-02-25 15:29:58'),
(11, 1, 'pasta', 780, 29, 157, 5, '2025-02-25 15:32:37', '2025-02-25 15:32:37'),
(12, 1, 'cheese', 1970, 114, 16, 165, '2025-02-25 15:46:07', '2025-02-25 15:46:07'),
(13, 1, 'cheese', 1970, 114, 16, 165, '2025-02-25 15:46:08', '2025-02-25 15:46:08'),
(14, 1, 'cheese', 1970, 114, 16, 165, '2025-02-25 15:46:26', '2025-02-25 15:46:26'),
(15, 1, 'eggs', 217, 19, 1, 14, '2025-02-25 16:35:11', '2025-02-25 16:35:11'),
(16, 1, 'eggs', 217, 19, 1, 14, '2025-02-25 16:35:36', '2025-02-25 16:35:36'),
(17, 1, 'oats', 3868, 133, 680, 66, '2025-02-25 16:36:27', '2025-02-25 16:36:27'),
(18, 1, 'oats', 1934, 66, 340, 33, '2025-02-25 16:37:11', '2025-02-25 16:37:11'),
(19, 2, 'steak', 273, 26, 0, 19, '2025-02-25 18:14:41', '2025-02-25 18:14:41'),
(20, 1, 'steak', 1367, 130, 0, 94, '2025-02-27 14:25:30', '2025-02-27 14:25:30'),
(21, 1, '500g of oats', 1934, 66, 340, 33, '2025-02-27 16:22:07', '2025-02-27 16:22:07'),
(22, 1, '200g of pasta', 312, 12, 63, 2, '2025-02-27 16:32:14', '2025-02-27 16:32:14'),
(23, 1, '500g of steak', 1367, 130, 0, 94, '2025-02-27 17:11:54', '2025-02-27 17:11:54'),
(24, 1, '500g of rice', 637, 13, 142, 1, '2025-02-27 17:22:08', '2025-02-27 17:22:08'),
(25, 1, '200g of oats', 774, 27, 136, 13, '2025-02-27 17:25:10', '2025-02-27 17:25:10'),
(26, 1, '200g of rice', 255, 5, 57, 1, '2025-02-27 17:26:58', '2025-02-27 17:26:58'),
(27, 1, '500g of pasta', 780, 29, 157, 5, '2025-02-27 17:28:05', '2025-02-27 17:28:05'),
(28, 3, '500g of pasta', 780, 29, 157, 5, '2025-02-27 17:47:30', '2025-02-27 17:47:30'),
(29, 3, '250g of oats', 967, 33, 170, 17, '2025-02-27 17:48:03', '2025-02-27 17:48:03'),
(30, 3, '200g of steak', 547, 52, 0, 38, '2025-02-27 18:24:58', '2025-02-27 18:24:58'),
(31, 1, '300g of oats', 1160, 40, 204, 20, '2025-03-01 14:48:29', '2025-03-01 14:48:29');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(9, '2025_02_24_151220_add_day_column_to_daily_intakes', 6),
(47, '2014_10_12_000000_create_users_table', 7),
(48, '2014_10_12_100000_create_password_resets_table', 7),
(49, '2019_08_19_000000_create_failed_jobs_table', 7),
(50, '2019_12_14_000001_create_personal_access_tokens_table', 7),
(51, '2025_02_22_174909_create_food_entries_table', 7),
(52, '2025_02_23_144356_create_daily_intakes_table', 7),
(53, '2025_02_24_114315_create_user_stats_table', 7),
(54, '2025_02_24_125530_create_user_goals_table', 7),
(55, '2025_02_24_163600_add_daily_carbs_column_to_daily_intakes', 7),
(56, '2025_02_24_181355_add_daily_fats_column_to_daily_intakes', 7),
(57, '2025_02_25_143719_add_foods_column_to_daily_intakes', 7);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 1, 'auth_token', '499a17309dfab0af4eb9c6d97699f949283b88dc4b6c2f201eba55cb5957f310', '[\"*\"]', '2025-02-25 16:40:31', NULL, '2025-02-25 14:47:08', '2025-02-25 16:40:31'),
(2, 'App\\Models\\User', 2, 'auth_token', '2daa4ec26a828550063c55ca9f8f4989f118cba9452aa340fe4d93f1ae34a375', '[\"*\"]', '2025-02-25 18:15:05', NULL, '2025-02-25 18:14:08', '2025-02-25 18:15:05'),
(3, 'App\\Models\\User', 1, 'auth_token', 'ce0830aa15fff5e5d4c0593e530833654fd0ef78c2e719c91ea2ff9ef781e786', '[\"*\"]', '2025-02-25 18:24:57', NULL, '2025-02-25 18:15:25', '2025-02-25 18:24:57'),
(4, 'App\\Models\\User', 1, 'auth_token', '07422cdeac0a7a6ae035bdef227c646361b7c5b3636a2b81fe4ef63b16a012c5', '[\"*\"]', '2025-02-27 14:25:47', NULL, '2025-02-27 14:24:38', '2025-02-27 14:25:47'),
(5, 'App\\Models\\User', 1, 'auth_token', '1ebf29329abe52731b88e3f7f32207cfd30febda371e9f5fc8a751b85bdfe5bc', '[\"*\"]', '2025-02-27 17:46:12', NULL, '2025-02-27 14:31:31', '2025-02-27 17:46:12'),
(6, 'App\\Models\\User', 3, 'auth_token', 'b4d462daeec22e57bd7206afb9a427933446d9cb2f1581c7bc1b099b30aa4081', '[\"*\"]', '2025-02-27 20:22:59', NULL, '2025-02-27 17:47:13', '2025-02-27 20:22:59'),
(7, 'App\\Models\\User', 1, 'auth_token', '1aba06b2c50a8fc30139772ca12a2c3a83593df07ce9ba05363910d3911195f6', '[\"*\"]', '2025-02-27 23:00:40', NULL, '2025-02-27 21:18:44', '2025-02-27 23:00:40'),
(8, 'App\\Models\\User', 1, 'auth_token', 'd2df100b52e02aba437a2f9e086a8097f43cf5e6157692f0bed5a2c01fb6969e', '[\"*\"]', '2025-03-01 14:50:02', NULL, '2025-03-01 14:48:09', '2025-03-01 14:50:02'),
(9, 'App\\Models\\User', 1, 'auth_token', 'a3dc218b1a4a128f75583f2ff8f23928bf63d5c9ede5d08a5a9ea5e911da861f', '[\"*\"]', '2025-03-01 14:50:44', NULL, '2025-03-01 14:50:32', '2025-03-01 14:50:44'),
(10, 'App\\Models\\User', 1, 'auth_token', '9588712e9f034e57d2796f550db4d0a9baf2f68eed5992972b86d001adbeb6e6', '[\"*\"]', '2025-03-01 15:02:53', NULL, '2025-03-01 14:52:06', '2025-03-01 15:02:53');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Tino', 'tinica6@yahoo.com', NULL, '$2y$10$Qn0KuFw7E2LOCya7NnxNPOPvKCR3P6S9/9OCaiRPK1g4kaqHj3aem', NULL, NULL, NULL),
(2, 'alex', 'asd@yahoo.com', NULL, '$2y$10$NRWkB89j0Me1Hd1VDIPS7.9AMhNqWZr9yKgL0xtwvyjL6zEYcGfJG', NULL, NULL, NULL),
(3, 'test', 'tinica7@yahoo.com', NULL, '$2y$10$AXoBUqwpzGvjShNkAbLJP.GMRee0xeFCaSf3pgmoU.bp2rI/IwxbK', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user_goals`
--

CREATE TABLE `user_goals` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `protein` double(8,2) NOT NULL,
  `calories` double(8,2) NOT NULL,
  `water` double(8,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_goals`
--

INSERT INTO `user_goals` (`id`, `user_id`, `protein`, `calories`, `water`, `created_at`, `updated_at`) VALUES
(1, 1, 200.00, 3000.00, 5.00, '2025-02-25 14:51:52', '2025-02-25 14:51:52'),
(2, 3, 250.00, 3700.00, 13.50, '2025-02-27 20:13:34', '2025-02-27 20:13:34');

-- --------------------------------------------------------

--
-- Table structure for table `user_stats`
--

CREATE TABLE `user_stats` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `height` int(11) NOT NULL DEFAULT 0,
  `weight` int(11) NOT NULL DEFAULT 0,
  `goal` varchar(255) NOT NULL DEFAULT 'None',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_stats`
--

INSERT INTO `user_stats` (`id`, `user_id`, `height`, `weight`, `goal`, `created_at`, `updated_at`) VALUES
(1, 3, 183, 85, 'Gain Weight', '2025-02-27 20:10:09', '2025-02-27 20:11:24'),
(2, 1, 185, 82, 'Lose Weight', '2025-03-01 14:49:27', '2025-03-01 14:49:27');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `daily_intakes`
--
ALTER TABLE `daily_intakes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `daily_intakes_user_id_foreign` (`user_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `food_entries`
--
ALTER TABLE `food_entries`
  ADD PRIMARY KEY (`id`),
  ADD KEY `food_entries_user_id_foreign` (`user_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `user_goals`
--
ALTER TABLE `user_goals`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_goals_user_id_foreign` (`user_id`);

--
-- Indexes for table `user_stats`
--
ALTER TABLE `user_stats`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_stats_user_id_foreign` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `daily_intakes`
--
ALTER TABLE `daily_intakes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `food_entries`
--
ALTER TABLE `food_entries`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `user_goals`
--
ALTER TABLE `user_goals`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `user_stats`
--
ALTER TABLE `user_stats`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `daily_intakes`
--
ALTER TABLE `daily_intakes`
  ADD CONSTRAINT `daily_intakes_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `food_entries`
--
ALTER TABLE `food_entries`
  ADD CONSTRAINT `food_entries_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `user_goals`
--
ALTER TABLE `user_goals`
  ADD CONSTRAINT `user_goals_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `user_stats`
--
ALTER TABLE `user_stats`
  ADD CONSTRAINT `user_stats_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
