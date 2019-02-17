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

INSERT INTO directors(id,full_name) VALUES (1,'Tim Burton', 'USA' );
INSERT INTO directors(id,full_name) VALUES (2,'James Cameron', 'Canada');
INSERT INTO directors(id,full_name) VALUES (3,'Steven Spielberg', 'USA');
INSERT INTO directors(id,full_name) VALUES (4,'Martin Scorsese', 'USA');
INSERT INTO directors(id,full_name) VALUES (5,'Alfred Hitchcock', 'UK');
INSERT INTO directors(id,full_name) VALUES (6,'Clint Eastwood', 'USA');
INSERT INTO directors(id,full_name) VALUES (7,'Ridley Scott', 'UK');
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

INSERT INTO artists(id,full_name)
    VALUES(1,'Hans Zimmer');
INSERT INTO artists(id,full_name)
    VALUES(2,'Danny Elfman');
INSERT INTO artists(id,full_name)
    VALUES(3,'Lisa Gerrard');
COMMIT;

INSERT INTO songs(id,title,artist_id)
    VALUES(1,'Now we are free',1);
INSERT INTO songs(id,title,artist_id)
    VALUES(2,'Edward Scissorhands',2);
INSERT INTO songs(id,title,artist_id)
    VALUES(3,'The Wheat',3);
INSERT INTO songs(id,title,artist_id)
    VALUES(4,'The Battle',1);

COMMIT;

INSERT INTO movies_soundtracks(id,movie_id,song_id)
    VALUES(1,2);
INSERT INTO movies_soundtracks(id,movie_id,song_id)
    VALUES(2,1);
INSERT INTO movies_soundtracks(id,movie_id,song_id)
    VALUES(2,3);
INSERT INTO movies_soundtracks(id,movie_id,song_id)
    VALUES(2,4);
COMMIT;

