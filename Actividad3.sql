-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 05-04-2018 a las 13:28:53
-- Versión del servidor: 5.7.21-0ubuntu0.16.04.1
-- Versión de PHP: 7.0.28-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `Actividad3`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `destinos`
--

CREATE TABLE `destinos` (
  `id_destino` int(11) NOT NULL,
  `viaje` varchar(45) NOT NULL,
  `fechaIda` varchar(20) NOT NULL,
  `fechaVuelta` varchar(20) NOT NULL,
  `descripcion` varchar(100) NOT NULL,
  `imagen` varchar(20) NOT NULL,
  `precio` int(12) NOT NULL,
  `activo` int(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `destinos`
--

INSERT INTO `destinos` (`id_destino`, `viaje`, `fechaIda`, `fechaVuelta`, `descripcion`, `imagen`, `precio`, `activo`) VALUES
(1, 'Malta al completo', '8-05-18', '18-05-18', 'Vuelo + Alojamiento + 4 Desayunos + Guía Turistica', 'malta.jpg', 799, 1),
(2, 'London visita guiada', '15-04-18', '20-04-18', 'Vuelo + Alojamiento + 4 Desayunos + Guía Turistica', 'london.jpg', 500, 1),
(3, 'Conoce los mejores lugares de Dublin', '18-05-18', '25-05-18', 'Vuelo + Alojamiento + 4 Desayunos + Guía Turistica', 'dublin.jpg', 720, 1),
(4, 'Paris , la cuidad bella de Francia', '15-06-18', '20-06-18', 'Vuelo + Alojamiento + 4 Desayunos + Guía Turistica', 'paris.jpg', 1175, 1),
(5, '¿Quieres conocer Amsterdam?', '18-06-18', '22-06-18', 'Vuelo + Alojamiento + 4 Desayunos + Guía Turistica\r\n', 'amsterdam.jpg', 820, 1),
(6, 'Italia , el pais de la comida', '10-07-18', '15-07-18', 'Vuelo + Alojamiento + 4 Desayunos + Guía Turistica\r\n', 'roma.jpg', 777, 1),
(7, 'viaje de prueba oculto', '10-10-18', '15-10-18', 'viaje del inserso', 'somos.jpg', 777, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `usuario` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `email`, `password`) VALUES
(36, 'eloy', 'eloy.galdon@gmail.com', '202cb962ac59075b964b07152d234b70'),
(37, 'maria', 'dfdf@dfdff', '81dc9bdb52d04dc20036dbd8313ed055'),
(38, 'martin', 'martin@gmail.com', '202cb962ac59075b964b07152d234b70');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `destinos`
--
ALTER TABLE `destinos`
  ADD PRIMARY KEY (`id_destino`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `destinos`
--
ALTER TABLE `destinos`
  MODIFY `id_destino` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
