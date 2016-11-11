-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-11-2016 a las 23:10:04
-- Versión del servidor: 10.1.13-MariaDB
-- Versión de PHP: 7.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mytasks`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tasks`
--

CREATE TABLE `tasks` (
  `id` int(11) NOT NULL,
  `title` varchar(150) NOT NULL,
  `description` text NOT NULL,
  `status` enum('Not started','In progress','Completed','Canceled/Postponed') NOT NULL DEFAULT 'Not started',
  `priority` enum('High','Normal','Low') NOT NULL DEFAULT 'Normal',
  `date` date NOT NULL,
  `created` datetime NOT NULL,
  `modified` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tasks`
--

INSERT INTO `tasks` (`id`, `title`, `description`, `status`, `priority`, `date`, `created`, `modified`) VALUES
(1, 'Hacer todas las tareas', 'Debo hacer las tareas juicioso', 'Not started', 'High', '2016-11-07', '2016-11-06 10:25:00', '2016-11-06 10:25:00'),
(2, 'Computador', 'Cortometrajes', 'Not started', 'High', '2016-11-11', '2016-11-10 03:17:53', '2016-11-10 03:17:53'),
(3, 'Ortodoncia', '', 'Not started', 'Normal', '2016-12-01', '2016-11-10 03:19:53', '2016-11-10 03:19:53'),
(4, 'Tarea Etica', 'Hacer la tarea de etica. de Alberto Garcia', 'Not started', 'High', '2016-11-10', '2016-11-10 03:21:04', '2016-11-10 05:20:10'),
(24, 'Tareas del Colegio', 'Hago las tareas y el fin de semana lo dejo para programar', 'Not started', 'Normal', '2016-11-11', '2016-11-10 05:18:49', '2016-11-10 05:19:43');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
