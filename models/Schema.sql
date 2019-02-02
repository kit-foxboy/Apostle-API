CREATE TABLE `employees` (
  `idEmployee` int(11) NOT NULL,
  `lastName` varchar(45) DEFAULT NULL,
  `firstName` varchar(45) DEFAULT NULL,
  `employeeNbr` varchar(45) NOT NULL,
  `department` varchar(45) DEFAULT NULL,
  `title` varchar(45) DEFAULT NULL,
  `cellPhone` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idEmployee`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='employee table'

CREATE TABLE `vehicles` (
  `idVehicle` int(11) NOT NULL COMMENT 'vehcile primary key',
  `vinNbr` varchar(45) NOT NULL,
  `registrationNbr` varchar(45) DEFAULT NULL,
  `registrationDate` varchar(45) DEFAULT NULL,
  `make` varchar(45) DEFAULT NULL,
  `model` varchar(45) DEFAULT NULL,
  `year` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idVehicle`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='vehicle table				'