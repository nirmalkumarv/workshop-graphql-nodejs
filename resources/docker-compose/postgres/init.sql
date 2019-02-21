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
  CONSTRAINT pk_movies_actors PRIMARY KEY (movie_id, actor_id)
);

CREATE TABLE movies_rates (
  movie_id          INT NOT NULL CONSTRAINT fk_movies_rates_movie REFERENCES movies(id),
  email             VARCHAR(128) NOT NULL,
  score             INT NOT NULL,
  CONSTRAINT pk_movies_rates PRIMARY KEY(movie_id, email)
);

COMMIT;

INSERT INTO actors(full_name,birth_date)
    VALUES ('Johnny Depp','06-09-1963');
INSERT INTO actors(full_name,birth_date)
    VALUES ('Winona Ryder','10-29-1971');
INSERT INTO actors(full_name,birth_date)
    VALUES ('Russell Crowe','04-07-1964');
INSERT INTO actors(full_name,birth_date)
    VALUES ('Joaquin Phoenix','10-28-1974');
INSERT INTO actors(full_name,birth_date)
    VALUES ('Al Pacino','04-25-1940');
INSERT INTO actors(full_name,birth_date)
    VALUES ('Robert de Niro','08-17-1943');

COMMIT;

INSERT INTO directors(full_name,country) VALUES ('Tim Burton', 'USA' );
INSERT INTO directors(full_name,country) VALUES ('James Cameron', 'Canada');
INSERT INTO directors(full_name,country) VALUES ('Steven Spielberg', 'USA');
INSERT INTO directors(full_name,country) VALUES ('Martin Scorsese', 'USA');
INSERT INTO directors(full_name,country) VALUES ('Alfred Hitchcock', 'UK');
INSERT INTO directors(full_name,country) VALUES ('Clint Eastwood', 'USA');
INSERT INTO directors(full_name,country) VALUES ('Ridley Scott', 'UK');
COMMIT;

INSERT INTO movies(title,release_year,genre,budget,thriller,director_id)
    VALUES ('Edward Scissorhands',1990,'SciFi',20,'https://www.youtube.com/watch?v=M94yyfWy-KI',1);

INSERT INTO movies(title,release_year,genre,budget,thriller,director_id)
    VALUES ('Gladiator',2000,'Drama',103,'https://www.youtube.com/watch?v=owK1qxDselE',7);
COMMIT;

INSERT INTO movies_actors(movie_id,actor_id)
    VALUES(1,1);
INSERT INTO movies_actors(movie_id,actor_id)
    VALUES(1,2);
INSERT INTO movies_actors(movie_id,actor_id)
    VALUES(2,3);
INSERT INTO movies_actors(movie_id,actor_id)
    VALUES(2,4);
COMMIT;


