-- Adminer 4.3.1 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

CREATE TABLE `t_task` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) NOT NULL,
  `status` tinyint(4) DEFAULT '0',
  `created_datetime` datetime DEFAULT NULL,
  `updated_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `t_task` (`id`, `name`, `status`, `created_datetime`, `updated_datetime`) VALUES
(1,	'revision number one',	1,	'0000-00-00 00:00:00',	'2017-11-11 16:33:02'),
(2,	'dolor sing',	1,	'0000-00-00 00:00:00',	NULL),
(6,	'dolor sing',	0,	NULL,	NULL),
(7,	'  revision number one',	1,	NULL,	NULL);

-- 2017-11-11 09:39:17
