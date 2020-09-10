-- Inserted a set of records into the table
USE burgers_db;

INSERT INTO burgers (burger_name, devoured)
VALUES ("The Classic", false), ("Double", false), ("Triple", false);

SELECT * FROM burgers;