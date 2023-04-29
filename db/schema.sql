
 

DROP DATABASE IF EXISTS movies_db;
CREATE DATABASE movies_db;
USE movies_db;

CREATE TABLE netflix(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    movie_name VARCHAR(100) NOT NULL
);

CREATE TABLE reviews(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    review TEXT NOT NULL,
    netflix_id INT NOT NULL,
    FOREIGN KEY (netflix_id) 
    REFERENCES netflix(id)
    ON DELETE CASCADE
);