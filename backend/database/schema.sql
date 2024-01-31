CREATE TABLE team(
   id      INT NOT NULL PRIMARY KEY AUTO_INCREMENT
  ,name    VARCHAR(28) NOT NULL
  ,city    VARCHAR(19) NOT NULL
  ,stadium VARCHAR(22) NOT NULL
  ,since   INTEGER  NOT NULL
  ,logo    VARCHAR (200) NOT NULL
  
);
INSERT INTO team(name,city,stadium,since,logo) VALUES ('Stade Toulousain','Toulouse','Ernest Wallon',1907,'https://upload.wikimedia.org/wikipedia/fr/thumb/0/01/Logo_Stade_Toulousain_Rugby.svg/langfr-1920px-Logo_Stade_Toulousain_Rugby.svg.png');
INSERT INTO team(name,city,stadium,since,logo) VALUES ('Aviron Bayonnais','Bayonne','Jean Dauger',1906,'https://upload.wikimedia.org/wikipedia/fr/thumb/1/1b/Logo_Aviron_Bayonnais_Rugby_-_2022.svg/langfr-1920px-Logo_Aviron_Bayonnais_Rugby_-_2022.svg.png');
INSERT INTO team(name,city,stadium,since,logo) VALUES ('Union Bordeaux Bègles','Bordeaux','Chaban Delmas',2006,'https://upload.wikimedia.org/wikipedia/fr/thumb/3/30/Logo_Union_Bordeaux_B%C3%A8gles_2018.svg/1200px-Logo_Union_Bordeaux_B%C3%A8gles_2018.svg.png');
INSERT INTO team(name,city,stadium,since,logo) VALUES ('Castres olympique','Castres','Pierre Fabre',1906,'https://upload.wikimedia.org/wikipedia/fr/thumb/f/f5/Logo_Castres_olympique_2018.svg/langfr-1920px-Logo_Castres_olympique_2018.svg.png');
INSERT INTO team(name,city,stadium,since,logo) VALUES ('ASM Clermont','Clermont-Ferrand','Marcel Michelin',1911,'https://upload.wikimedia.org/wikipedia/fr/thumb/a/a8/Logo_ASM_Clermont_Auvergne_2019.svg/langfr-1920px-Logo_ASM_Clermont_Auvergne_2019.svg.png');
INSERT INTO team(name,city,stadium,since,logo) VALUES ('Stade Rochelais','La Rochelle','Marcel Deflandre',1898,'https://upload.wikimedia.org/wikipedia/fr/thumb/4/44/Logo_Stade_rochelais_2016.svg/langfr-1920px-Logo_Stade_rochelais_2016.svg.png');
INSERT INTO team(name,city,stadium,since,logo) VALUES ('Lyon Lou','Lyon','Matmut Stadium',1896,'https://upload.wikimedia.org/wikipedia/fr/thumb/2/25/Lyon_olympique_universitaire.svg/langfr-1280px-Lyon_olympique_universitaire.svg.png');
INSERT INTO team(name,city,stadium,since,logo) VALUES ('Montpellier Hérault rugby','Montpellier','GGL Stadium',1986,'https://upload.wikimedia.org/wikipedia/en/thumb/d/d9/Logo_Montpellier_H%C3%A9rault_rugby_2013.svg/400px-Logo_Montpellier_H%C3%A9rault_rugby_2013.svg.png');
INSERT INTO team(name,city,stadium,since,logo) VALUES ('Union sportive Oyonnax rugby','Oyonnax','Charles Mathon',1942,'https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/OyonnaxRugby2018logo.svg/1920px-OyonnaxRugby2018logo.svg.png');
INSERT INTO team(name,city,stadium,since,logo) VALUES ('Section paloise','Pau','Stade du Hameau',1902,'https://upload.wikimedia.org/wikipedia/fr/thumb/5/54/Logo_Section_paloise_B%C3%A9arn_Pyr%C3%A9n%C3%A9es_2021.svg/langfr-1920px-Logo_Section_paloise_B%C3%A9arn_Pyr%C3%A9n%C3%A9es_2021.svg.png');
INSERT INTO team(name,city,stadium,since,logo) VALUES ('USA Perpignan','Perpignan','Aimé Giral',1933,'https://upload.wikimedia.org/wikipedia/fr/thumb/7/77/Logo_USA_Perpignan_2017.svg/langfr-1920px-Logo_USA_Perpignan_2017.svg.png');
INSERT INTO team(name,city,stadium,since,logo) VALUES ('Racing 92','Le Plessis-Robinson','Paris La Défense Arena',1890,'https://upload.wikimedia.org/wikipedia/fr/thumb/c/c7/Logo_Racing_92_2015.svg/langfr-1920px-Logo_Racing_92_2015.svg.png');
INSERT INTO team(name,city,stadium,since,logo) VALUES ('Stade Français','Paris','Jean Bouin',1880,'https://upload.wikimedia.org/wikipedia/fr/thumb/0/0f/Logo_Stade_fran%C3%A7ais_PR_2018.svg/langfr-1920px-Logo_Stade_fran%C3%A7ais_PR_2018.svg.png');
INSERT INTO team(name,city,stadium,since,logo) VALUES ('Rugby Club Toulonnais','Toulon','Mayol',1908,'https://upload.wikimedia.org/wikipedia/fr/thumb/3/34/Logo_RC_Toulon_2015.svg/langfr-1920px-Logo_RC_Toulon_2015.svg.png');

CREATE TABLE players(
   id   INTEGER  NOT NULL PRIMARY KEY AUTO_INCREMENT
  ,lastname  VARCHAR(8) NOT NULL
  ,firstname VARCHAR(7) NOT NULL
  ,birthday  VARCHAR (10) NOT NULL
  ,country   VARCHAR(16) NOT NULL
  ,city      VARCHAR(19) NOT NULL
  ,job       VARCHAR(20) NOT NULL
  ,team_id INTEGER NOT NULL
  ,FOREIGN KEY (team_id) REFERENCES team(id)
);
INSERT INTO players(team_id,lastname,firstname,birthday,country,city,job) VALUES (1,'Dupont','Antoine','15/11/1996','France','Lannemezan','Demi de mêlée');
INSERT INTO players(team_id,lastname,firstname,birthday,country,city,job) VALUES (2,'Lopez','Camille','03/04/1989','France','Oloron-Sainte-Marie','Demi d''ouverture');
INSERT INTO players(team_id,lastname,firstname,birthday,country,city,job) VALUES (3,'Boniface','Ugo','21/07/98','France','Marmande','Pilier gauche');
INSERT INTO players(team_id,lastname,firstname,birthday,country,city,job) VALUES (4,'Cocagi','Andrea','01/03/1994','Fiji','Nuku','Demi d''ouverture');
INSERT INTO players(team_id,lastname,firstname,birthday,country,city,job) VALUES (5,'Kremer','Marcos','03/04/1989','Argentine','Concordia','Troisième ligne aile');
INSERT INTO players(team_id,lastname,firstname,birthday,country,city,job) VALUES (6,'Uini','Atonio','26/03/1990','Nouvelle-Zélande','Timaru','Pilier droit');
