DROP DATABASE burgers_db;

CREATE DATABASE burgers_db;

-- Use the DB burgers_db for all the rest of the script
USE burgers_db;

-- Created the table "burgers"
CREATE TABLE burgers (
  id int AUTO_INCREMENT NOT NULL,
  burger_name varchar(50) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY(id)
);