DROP SCHEMA IF EXISTS workshop;

CREATE SCHEMA IF NOT EXISTS workshop;


CREATE TABLE IF NOT EXISTS directors (
  id                SERIAL PRIMARY KEY,
  full_name         VARCHAR(128),
  country           VARCHAR(128),
  CONSTRAINT uq_director UNIQUE (full_name)
);

CREATE TABLE IF NOT EXISTS movies (
  id            SERIAL             PRIMARY KEY,
  title         VARCHAR(256),
  release_year  INT,
  genre         VARCHAR(64),
  budget        NUMERIC(28,2),
  thriller      VARCHAR(256),
  director_id   INT,
  CONSTRAINT uq_title UNIQUE (title),
  CONSTRAINT fk_movies_director FOREIGN KEY (director_id) REFERENCES directors(id)
);

CREATE TABLE IF NOT EXISTS actors (
  id            SERIAL PRIMARY KEY,
  full_name     VARCHAR(128),
  birth_date    DATE,
  CONSTRAINT uq_actor UNIQUE (full_name)
);

CREATE TABLE movies_actors (
  movie_id          INT NOT NULL CONSTRAINT fk_movies_actors_movie REFERENCES movies(id),
  actor_id          INT NOT NULL CONSTRAINT fk_movies_actors_actor REFERENCES actors(id),
  movie_character   VARCHAR(128),
  CONSTRAINT pk_movies_actors PRIMARY KEY (movie_id, actor_id)
);

COMMIT;

INSERT INTO actors(id,full_name,birth_date)
    VALUES (1,'Johnny Depp','06-09-1963');
INSERT INTO actors(id,full_name,birth_date)
    VALUES (2,'Winona Ryder','10-29-1971');
INSERT INTO actors(id,full_name,birth_date)
    VALUES (3,'Russell Crowe','04-07-1964');
INSERT INTO actors(id,full_name,birth_date)
    VALUES (4,'Joaquin Phoenix','10-28-1974');
INSERT INTO actors(id,full_name,birth_date)
    VALUES (5,'Al Pacino','04-25-1940');
INSERT INTO actors(id,full_name,birth_date)
    VALUES (6,'Robert de Niro','08-17-1943');

COMMIT;

INSERT INTO directors(id,full_name,country) VALUES (1,'Tim Burton', 'USA' );
INSERT INTO directors(id,full_name,country) VALUES (2,'James Cameron', 'Canada');
INSERT INTO directors(id,full_name,country) VALUES (3,'Steven Spielberg', 'USA');
INSERT INTO directors(id,full_name,country) VALUES (4,'Martin Scorsese', 'USA');
INSERT INTO directors(id,full_name,country) VALUES (5,'Alfred Hitchcock', 'UK');
INSERT INTO directors(id,full_name,country) VALUES (6,'Clint Eastwood', 'USA');
INSERT INTO directors(id,full_name,country) VALUES (7,'Ridley Scott', 'UK');
COMMIT;

INSERT INTO movies(id,title,release_year,genre,budget,thriller,director_id)
    VALUES (1,'Edward Scissorhands',1990,'Sci-fi',20,'https://www.youtube.com/watch?v=M94yyfWy-KI',1);

INSERT INTO movies(id,title,release_year,genre,budget,thriller,director_id)
    VALUES (2,'Gladiator',2000,'Drama',103,'https://www.youtube.com/watch?v=owK1qxDselE',7);
COMMIT;

INSERT INTO movies_actors(movie_id,actor_id,movie_character)
    VALUES(1,1,'Edward Scissorhands');
INSERT INTO movies_actors(movie_id,actor_id,movie_character)
    VALUES(1,2,'Kim Boggs');
INSERT INTO movies_actors(movie_id,actor_id,movie_character)
    VALUES(2,3,'Maximus');
INSERT INTO movies_actors(movie_id,actor_id,movie_character)
    VALUES(2,4,'Commodus');
COMMIT;


