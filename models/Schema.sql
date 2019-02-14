DROP DATABASE IF EXISTS dsp;

CREATE DATABASE dsp;
USE dsp;

CREATE TABLE `employees` (
  `id` int NOT NUll AUTO_INCREMENT,
  `userId` int NOT NULL,
  `lastName` varchar(45) DEFAULT NULL,
  `firstName` varchar(45) DEFAULT NULL,
  `employeeNbr` varchar(45) NOT NULL,
  `department` varchar(45) DEFAULT NULL,
  `title` varchar(45) DEFAULT NULL,
  `cellPhone` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='employee table';

CREATE TABLE `vehicles` (
  `id` int NOT NUll AUTO_INCREMENT,
  `vinNbr` varchar(45) NOT NULL,
  `registrationNbr` varchar(45) DEFAULT NULL,
  `registrationDate` varchar(45) DEFAULT NULL,
  `make` varchar(45) DEFAULT NULL,
  `model` varchar(45) DEFAULT NULL,
  `year` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='vehicle table';

CREATE TABLE `inspection`(
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `vehicleId` int NOT NULL,
  `comments` varchar(45) NULL,
  `cargo` varchar(45) DEFAULT NULL,
  `brakes` varchar(45) DEFAULT NULL,
  `tires` varchar(45) DEFAULT NULL,
  `horn` varchar (45) DEFAULT NULL,
  `endDatetime` DATE DEFAULT NULL, 
  PRIMARY KEY (`id`)
  
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='inspection table';
CREATE TABLE `users`(
  `id` int NOT NULL AUTO_INCREMENT,
  `userName` varchar(45) NOT NULL,
  `passWord` varchar(45) Not NULL,
  PRIMARY KEY (`id`)
  
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='user table';

