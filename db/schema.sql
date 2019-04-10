DROP DATABASE IF EXISTS my_db;
CREATE DATABASE my_db;
USE my_db;

CREATE TABLE check_list (
	id int NOT NULL AUTO_INCREMENT,
    checklist_item varchar(100) NOT NULL,
    completed bool DEFAULT false,
    PRIMARY KEY(id)
);