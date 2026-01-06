# Actor–Movie Database SQL Solutions

This document contains SQL questions and their corresponding queries and their outputs.

---

### 1. Write a SQL query to find the name and year of the movies. Return movie title, movie release year.
```sql
select mov_title,mov_year from movie;
```
**output**
| mov_title | mov_year |
|----------|----------|
| Vertigo | 1958 |
| The Innocents | 1961 |
| Lawrence of Arabia | 1962 |
| The Deer Hunter | 1978 |
| Amadeus | 1984 |
| Blade Runner | 1982 |
| Eyes Wide Shut | 1999 |
| The Usual Suspects | 1995 |
| Chinatown | 1974 |
| Boogie Nights | 1997 |
| Annie Hall | 1977 |
| Princess Mononoke | 1997 |
| The Shawshank Redemption | 1994 |
| American Beauty | 1999 |
| Titanic | 1997 |
| Good Will Hunting | 1997 |
| Deliverance | 1972 |
| Trainspotting | 1996 |
| The Prestige | 2006 |
| Donnie Darko | 2001 |
| Slumdog Millionaire | 2008 |
| Aliens | 1986 |
| Beyond the Sea | 2004 |
| Avatar | 2009 |
| Seven Samurai | 1954 |
| Spirited Away | 2001 |
| Back to the Future | 1985 |
| Braveheart | 1995 |

---

### 2. Write a SQL query to find when the movie 'American Beauty' released. Return movie release year.
```sql
select mov_year from movie where mov_title="American Beauty";
```
**output**
| mov_year |
|----------|
| 1999 |

---

### 3. Write a SQL query to find the movie that was released in 1999. Return movie title.
```sql
select mov_title from movie where mov_year=1999;
```
**output**
| mov_title |
|-----------|
| Eyes Wide Shut |
| American Beauty |

---

### 4. Write a SQL query to find those movies, which were released before 1998. Return movie title.
```sql
select mov_title from movie where mov_year<1998;
```
**output**
| mov_title |
|-----------|
| Vertigo |
| The Innocents |
| Lawrence of Arabia |
| The Deer Hunter |
| Amadeus |
| Blade Runner |
| The Usual Suspects |
| Chinatown |
| Boogie Nights |
| Annie Hall |
| Princess Mononoke |
| The Shawshank Redemption |
| Titanic |
| Good Will Hunting |
| Deliverance |
| Trainspotting |
| Aliens |
| Seven Samurai |
| Back to the Future |
| Braveheart |

---

### 5. Write a SQL query to find the name of all reviewers and movies together in a single list.
```sql
select mov_title as List_mov_rev from movie
union 
select rev_name from movie_reviewer;
```
**output**
| list_mov_rev |
|--------------|
| Vertigo |
| The Innocents |
| Lawrence of Arabia |
| The Deer Hunter |
| Amadeus |
| Blade Runner |
| Eyes Wide Shut |
| The Usual Suspects |
| Chinatown |
| Boogie Nights |
| Annie Hall |
| Princess Mononoke |
| The Shawshank Redemption |
| American Beauty |
| Titanic |
| Good Will Hunting |
| Deliverance |
| Trainspotting |
| The Prestige |
| Donnie Darko |
| Slumdog Millionaire |
| Aliens |
| Beyond the Sea |
| Avatar |
| Seven Samurai |
| Spirited Away |
| Back to the Future |
| Braveheart |
| Righty Sock |
| Jack Malvern |
| Flagrant Baronessa |
| Alec Shaw |
| Victor Woeltjen |
| Simon Wright |
| Neal Wruck |
| Paul Monks |
| Mike Salvati |
| Wesley S. Walker |
| Sasha Goldshtein |
| Josh Cates |
| Krug Stillo |
| Scott LeBrun |
| Hannah Steele |
| Vincent Cadena |
| Brandt Sponseller |
| Richard Adams |

---

### 6. Write a SQL query to find all reviewers who have rated seven or more stars to their rating. Return reviewer name.
```sql
select m.rev_name from movie_reviewer as m, movie_rating as r where m.rev_id=r.rev_id and r.rev_stars>=7;
```
**output**
| rev_name |
|----------|
| Righty Sock |
| Jack Malvern |
| Flagrant Baronessa |
| Simon Wright |
| Mike Salvati |
| Sasha Goldshtein |
| Righty Sock |
| Hannah Steele |
| Vincent Cadena |
| Brandt Sponseller |
| Victor Woeltjen |
| Krug Stillo |

---

### 7. Write a SQL query to find the movies without any rating. Return movie title.
```sql
select m.mov_title from movie as m, movie_rating as r where m.mov_id=r.mov_id and r.num_o_ratings IS NULL;
```
**output**
| mov_title |
|-----------|
| Princess Mononoke |
| Avatar |

---

### 8. Write a SQL query to find the movies with ID 905 or 907 or 917. Return movie title.
```sql
select mov_title from movie where mov_id=905 or mov_id=907 or mov_id=917;
```
**output**
| mov_title |
|-----------|

---

### 9. Write a SQL query to find the movie titles that contain the word 'Boogie Nights'. Sort the result-set in ascending order by movie year. Return movie ID, movie title and movie release year.
```sql
select mov_id, mov_title, mov_year from movie where mov_title like "%Boogie Nights%" order by mov_year;
```
**output**
| mov_id | mov_title | mov_year |
|--------|-----------|----------|
| 10 | Boogie Nights | 1997 |

---

### 10. Write a SQL query to find those actors with the first name 'Woody' and the last name 'Allen'. Return actor ID.
```sql
select act_id from actor where act_fname="Woody" and act_lname="Allen";
```
**output**
| act_id |
|--------|
| 11 |

---

### 11. Write a SQL query to find the actors who played a role in the movie 'Annie Hall'. Return all the fields of actor table.
```sql
select * from actor where act_id in
	(select act_id from movie_cast where mov_id in 
		(select mov_id from movie where mov_title="Annie Hall"));
```
**output**
| act_id | act_fname | act_lname | act_gender |
|--------|-----------|-----------|------------|
| 11 | Woody | Allen | M |

---

### 12. Write a SQL query to find the director of a film that cast a role in 'Eyes Wide Shut'. Return director first name, last name.
```sql
select dir_fname,dir_lname from director where dir_id in
	(select dir_id from movie_direction where mov_id in 
		( select mov_id from movie where mov_title="Eyes Wide Shut"));
```
**output**
| dir_fname | dir_lname |
|-----------|-----------|
| Stanley | Kubrick |

---

### 13. Write a SQL query to find those movies that have been released in countries other than the United Kingdom. Return movie title, movie year, movie time, and date of release, releasing country.
```sql
select mov_title,mov_year,mov_time,mov_dt_rel, mov_rel_country from movie where mov_id not in
	(select mov_id from movie where mov_rel_country="UK");
```
**output**
| mov_title | mov_year | mov_time | mov_dt_rel | mov_rel_country |
|-----------|----------|----------|------------|-----------------|
| The Innocents | 1961 | 100 | 1962-02-19 | SW |
| Annie Hall | 1977 | 93 | 1977-04-20 | USA |
| Seven Samurai | 1954 | 207 | 1954-04-26 | JP |

---

### 14. Write a SQL query to find for movies whose reviewer is unknown. Return movie title, year, release date, director first name, last name, actor first name, last name.
```sql
select m.mov_title,m.mov_year,m.mov_dt_rel,d.dir_fname,d.dir_lname,a.act_fname,a.act_lname from 
	movie m left join movie_rating mr on m.mov_id = mr.mov_id
	join movie_direction md on m.mov_id = md.mov_id
	join director d on md.dir_id = d.dir_id
	join movie_cast mc on m.mov_id = mc.mov_id
	join actor a on mc.act_id = a.act_id
	where mr.rev_id is null;
```
**output**
| mov_title | mov_year | mov_dt_rel | dir_fname | dir_lname | act_fname | act_lname |
|-----------|----------|------------|-----------|-----------|-----------|-----------|
| The Deer Hunter | 1978 | 1979-03-08 | Michael | Cimino | Robert | De Niro |
| Amadeus | 1984 | 1985-01-07 | Milos | Forman | F. Murray | Abraham |
| Eyes Wide Shut | 1999 |  | Stanley | Kubrick | Nicole | Kidman |
| The Shawshank Redemption | 1994 | 1995-02-17 | Frank | Darabont | Tim | Robbins |
| Deliverance | 1972 | 1982-10-05 | John | Boorman | Jon | Voight |
| The Prestige | 2006 | 2006-11-10 | Christopher | Nolan | Christian | Bale |

---

### 15. Write a SQL query to find those movies directed by the director whose first name is Woddy and last name is Allen. Return movie title.
```sql
select mov_title from movie where mov_id in 
	(select mov_id from movie_direction where dir_id in
		(select dir_id from director where dir_fname="Woody" and dir_lname="Allen"));
```
**output**
| mov_title |
|-----------|
| Annie Hall |

---

### 16. Write a SQL query to determine those years in which there was at least one movie that received a rating of at least three stars. Sort the result-set in ascending order by movie year. Return movie year.
```sql
select mov_year from movie where mov_id in
	(select mov_id from movie_rating where rev_stars>=3) group by mov_year order by mov_year;
```
**output**
| mov_year |
|----------|
| 1954 |
| 1958 |
| 1961 |
| 1962 |
| 1977 |
| 1982 |
| 1986 |
| 1995 |
| 1997 |
| 1999 |
| 2001 |
| 2004 |
| 2008 |
| 2009 |

---

### 17. Write a SQL query to search for movies that do not have any ratings. Return movie title.
```sql
select mov_title from movie where mov_id in
	(select mov_id from movie_rating where num_o_ratings IS NULL);
```
**output**
| mov_title |
|-----------|
| Princess Mononoke |
| Avatar |

---

### 18. Write a SQL query to find those reviewers who have not given a rating to certain films. Return reviewer name.
```sql
select rev_name from movie_reviewer where rev_id in
	(select rev_id from movie_rating where num_o_ratings IS NULL);
```
**output**
| rev_name |
|----------|
| |
| Victor Woeltjen |


---

### 19. Write a SQL query to find movies that have been reviewed by a reviewer and received a rating. Sort the result-set in ascending order by reviewer name, movie title, review Stars. Return reviewer name, movie title, review Stars.
```sql
select r.rev_name,mr.rev_stars, m.mov_title 
	from movie as m join movie_rating as mr on m.mov_id=mr.mov_id join movie_reviewer as r on mr.rev_id=r.rev_id
    order by r.rev_name,mov_title,rev_stars;
```
**output**
| rev_name | rev_stars | mov_title |
|----------|-----------|-----------|
|  | 8.20 | Blade Runner |
|  | 8.40 | Princess Mononoke |
| Brandt Sponseller | 8.40 | Aliens |
| Flagrant Baronessa | 8.30 | Lawrence of Arabia |
| Hannah Steele | 8.10 | Donnie Darko |
| Jack Malvern | 7.90 | The Innocents |
| Josh Cates | 4.00 | Good Will Hunting |
| Krug Stillo | 7.70 | Seven Samurai |
| Mike Salvati | 8.10 | Annie Hall |
| Neal Wruck |  | Chinatown |
| Paul Monks | 3.00 | Boogie Nights |
| Richard Adams | 6.70 | Beyond the Sea |
| Righty Sock | 7.70 | Titanic |
| Righty Sock | 8.40 | Vertigo |
| Sasha Goldshtein | 7.00 | American Beauty |
| Scott LeBrun |  | Trainspotting |
| Simon Wright | 8.60 | The Usual Suspects |
| Victor Woeltjen | 7.30 | Avatar |
| Vincent Cadena | 8.00 | Slumdog Millionaire |

---

### 20. Write a SQL query to find movies that have been reviewed by a reviewer and received a rating. Group the result set on reviewer's name, movie title. Return reviewer's name, movie title.
```sql
select r.rev_name, m.mov_title from movie_reviewer r, movie m where r.rev_id in 
	(select mr.rev_id from movie_rating mr where mr.mov_id = m.mov_id)
	group by r.rev_name, m.mov_title;
```
**output**
| rev_name | mov_title |
|----------|-----------|
| Righty Sock | Vertigo |
| Righty Sock | Titanic |
| Jack Malvern | The Innocents |
| Flagrant Baronessa | Lawrence of Arabia |
|  | Blade Runner |
| Victor Woeltjen | Avatar |
| Simon Wright | The Usual Suspects |
| Neal Wruck | Chinatown |
| Paul Monks | Boogie Nights |
| Mike Salvati | Annie Hall |
|  | Princess Mononoke |
| Sasha Goldshtein | American Beauty |
| Josh Cates | Good Will Hunting |
| Krug Stillo | Seven Samurai |
| Scott LeBrun | Trainspotting |
| Hannah Steele | Donnie Darko |
| Vincent Cadena | Slumdog Millionaire |
| Brandt Sponseller | Aliens |
| Richard Adams | Beyond the Sea |

---

### 21. Write a SQL query to find those movies, which have received highest number of stars. Group the result set on movie title and sorts the result-set in ascending order by movie title. Return movie title and maximum number of review stars.
```sql
select m.mov_title, mr.rev_stars from movie as m, movie_rating as mr
	where m.mov_id=mr.mov_id and mr.rev_stars in
    (select max(rev_stars) from movie_rating) 
    order by m.mov_title;
```
**output**
| mov_title | rev_stars |
|-----------|-----------|
| The Usual Suspects | 8.60 |

---

### 22. Write a SQL query to find all reviewers who rated the movie 'American Beauty'. Return reviewer name.
```sql
select rev_name from movie_reviewer where rev_id in
	(select rev_id from movie_rating where mov_id in
		(select mov_id from movie where mov_title="American Beauty"));
```
**output**
| rev_name |
|----------|
| Sasha Goldshtein |

---

### 23. Write a SQL query to find the movies that have not been reviewed by any reviewer body other than 'Paul Monks'. Return movie title.
```sql
select mov_title from movie where mov_id in
	(select mov_id from movie_rating where rev_id = all
		(select rev_id from movie_reviewer where rev_name="Paul Monks"));
```
**output**
| mov_title |
|-----------|
| Boogie Nights |

---

### 24. Write a SQL query to find the movies with the lowest ratings. Return reviewer name, movie title, and number of stars for those movies.
```sql
select r.rev_name, m.mov_title, mr.rev_stars from movie_reviewer as r, movie_rating as mr, movie as m
	where m.mov_id=mr.mov_id and mr.rev_id=r.rev_id and mr.rev_stars in
    (select min(rev_stars) from movie_rating);
```
**output**
| rev_name | mov_title | rev_stars |
|----------|-----------|-----------|
| Paul Monks | Boogie Nights | 3.00 |

---

### 25. Write a SQL query to find the movies directed by 'James Cameron'. Return movie title.
```sql
select mov_title from movie where mov_id in
	(select mov_id from movie_direction where dir_id =
		(select dir_id from director where dir_fname="James" and dir_lname="Cameron"));
```
**output**
| mov_title |
|-----------|
| Titanic |
| Aliens |

---

### 26. Write a query in SQL to find the movies in which one or more actors appeared in more than one film.
```sql
select mov_title from movie where mov_id in
	(select mov_id from movie_cast where act_id in
		(select act_id from movie_cast group by act_id having count(mov_id)>1));
```
**output**
| mov_title |
|-----------|
| American Beauty |
| Beyond the Sea |

---

### 27. Write a SQL query to find all reviewers whose ratings contain a NULL value. Return reviewer name.
```sql
select rev_name 
	from movie_reviewer join movie_rating on movie_reviewer.rev_id=movie_rating.rev_id 
	where num_o_ratings IS NULL;
```
**output**
| rev_name |
|----------|
| |
| Victor Woeltjen |

---

### 28. Write a SQL query to find out who was cast in the movie 'Annie Hall'. Return actor first name, last name and role.
```sql
select act_fname,act_lname,role 
	from actor join movie_cast on actor.act_id=movie_cast.act_id
    join movie on movie.mov_id=movie_cast.mov_id
    where mov_title="Annie Hall";
```
**output**
| act_fname | act_lname | role |
|-----------|-----------|------|
| Woody | Allen | Alvy Singer |

---

### 29. Write a SQL query to find the director who directed a movie that featured a role in 'Eyes Wide Shut'. Return director first name, last name and movie title.
```sql
select dir_fname,dir_lname,mov_title from
	director join movie_direction on director.dir_id=movie_direction.dir_id
    join movie on movie_direction.mov_id=movie.mov_id
    join movie_cast on movie.mov_id=movie_cast.mov_id
    where movie_cast.role in
    (select role from movie_cast where mov_id = 
		(select mov_id from movie where mov_title = 'Eyes Wide Shut'));
```
**output**
| dir_fname | dir_lname | mov_title |
|-----------|-----------|-----------|
| Stanley | Kubrick | Eyes Wide Shut |

---

### 30. Write a SQL query to find the director of a movie that cast a role as Sean Maguire. Return director first name, last name and movie title.
```sql
select dir_fname,dir_lname, mov_title from 
	director inner join movie_direction on director.dir_id=movie_direction.mov_id
    inner join movie on movie_direction.mov_id=movie.mov_id
    where mov_title = 
    (select mov_title from movie where mov_id =
		(select mov_id from movie_cast where role="Sean Maguire"));
```
**output**
| dir_fname | dir_lname | mov_title |
|-----------|-----------|-----------|
| Gus | Van Sant | Good Will Hunting |

---

### 31. Write a SQL query to find out which actors have not appeared in any movies between 1990 and 2000 (Begin and end values are included.). Return actor first name, last name, movie title and release year.
```sql
select a.act_fname,a.act_lname,m.mov_title,m.mov_year from
	actor as a join movie_cast as mc on a.act_id=mc.act_id
    join movie as m on mc.mov_id=m.mov_id
    where m.mov_year not between 1990 and 2000;
```
**output**
| act_fname | act_lname | mov_title | mov_year |
|-----------|-----------|-----------|----------|
| James | Stewart | Vertigo | 1958 |
| Deborah | Kerr | The Innocents | 1961 |
| Peter | OToole | Lawrence of Arabia | 1962 |
| Robert | De Niro | The Deer Hunter | 1978 |
| F. Murray | Abraham | Amadeus | 1984 |
| Harrison | Ford | Blade Runner | 1982 |
| Jack | Nicholson | Chinatown | 1974 |
| Woody | Allen | Annie Hall | 1977 |
| Jon | Voight | Deliverance | 1972 |
| Christian | Bale | The Prestige | 2006 |
| Maggie | Gyllenhaal | Donnie Darko | 2001 |
| Dev | Patel | Slumdog Millionaire | 2008 |
| Sigourney | Weaver | Aliens | 1986 |
| Kevin | Spacey | Beyond the Sea | 2004 |

---

### 32. Write a SQL query to find the directors who have directed films in a variety of genres. Group the result set on director first name, last name and generic title. Sort the result-set in ascending order by director first name and last name. Return director first name, last name and number of genres movies.
```sql
select d.dir_fname,d.dir_lname,g.gen_title,count(m.mov_id) from
	genres as g join movie_genres as mg on g.gen_id=mg.gen_id
    join movie as m on mg.mov_id=m.mov_id
    join movie_direction as md on m.mov_id=md.mov_id
    join director as d on md.dir_id=d.dir_id
    group by d.dir_fname,d.dir_lname,g.gen_title 
    order by d.dir_fname,d.dir_lname;
```
**output**
| act_fname | act_lname | mov_title | mov_year |
|-----------|-----------|-----------|----------|
| James | Stewart | Vertigo | 1958 |
| Deborah | Kerr | The Innocents | 1961 |
| Peter | OToole | Lawrence of Arabia | 1962 |
| Robert | De Niro | The Deer Hunter | 1978 |
| F. Murray | Abraham | Amadeus | 1984 |
| Harrison | Ford | Blade Runner | 1982 |
| Jack | Nicholson | Chinatown | 1974 |
| Woody | Allen | Annie Hall | 1977 |
| Jon | Voight | Deliverance | 1972 |
| Christian | Bale | The Prestige | 2006 |
| Maggie | Gyllenhaal | Donnie Darko | 2001 |
| Dev | Patel | Slumdog Millionaire | 2008 |
| Sigourney | Weaver | Aliens | 1986 |
| Kevin | Spacey | Beyond the Sea | 2004 |

---

### 33. Write a SQL query to find the movies with year and genres. Return movie title, movie year and generic title.
```sql
select m.mov_title,m.mov_year,g.gen_title from
	movie as m join movie_genres as mg on m.mov_id=mg.mov_id
    join genres as g on mg.gen_id=g.gen_id;
```
**output**
| mov_title | mov_year | gen_title |
|-----------|----------|-----------|
| Aliens | 1986 | Action |
| Lawrence of Arabia | 1962 | Adventure |
| Deliverance | 1972 | Adventure |
| Princess Mononoke | 1997 | Animation |
| Annie Hall | 1977 | Comedy |
| The Usual Suspects | 1995 | Crime |
| The Shawshank Redemption | 1994 | Crime |
| Trainspotting | 1996 | Drama |
| Slumdog Millionaire | 2008 | Drama |
| Spirited Away | 2001 | Drama |
| Braveheart | 1995 | Drama |
| The Innocents | 1961 | Horror |
| Beyond the Sea | 2004 | Music |
| Vertigo | 1958 | Mystery |
| Eyes Wide Shut | 1999 | Mystery |
| Back to the Future | 1985 | Mystery |
| American Beauty | 1999 | Romance |
| Blade Runner | 1982 | Thriller |
| The Deer Hunter | 1978 | War |

---

### 34. Write a SQL query to find all the movies with year, genres, and name of the director.
```sql
select d.dir_fname,d.dir_lname,m.mov_year,g.gen_title,m.mov_title from
	movie as m join movie_genres as mg on m.mov_id=mg.mov_id
    join genres as g on mg.gen_id=g.gen_id
    join movie_direction as md on m.mov_id=md.mov_id
    join director as d on d.dir_id=md.dir_id;
```
**output**
| dir_fname | dir_lname | mov_year | gen_title | mov_title |
|-----------|-----------|----------|-----------|-----------|
| James | Cameron | 1986 | Action | Aliens |
| David | Lean | 1962 | Adventure | Lawrence of Arabia |
| John | Boorman | 1972 | Adventure | Deliverance |
| Hayao | Miyazaki | 1997 | Animation | Princess Mononoke |
| Woody | Allen | 1977 | Comedy | Annie Hall |
| Bryan | Singer | 1995 | Crime | The Usual Suspects |
| Frank | Darabont | 1994 | Crime | The Shawshank Redemption |
| Danny | Boyle | 1996 | Drama | Trainspotting |
| Danny | Boyle | 2008 | Drama | Slumdog Millionaire |
| Jack | Clayton | 1961 | Horror | The Innocents |
| Kevin | Spacey | 2004 | Music | Beyond the Sea |
| Alfred | Hitchcock | 1958 | Mystery | Vertigo |
| Stanley | Kubrick | 1999 | Mystery | Eyes Wide Shut |
| Sam | Mendes | 1999 | Romance | American Beauty |
| Ridley | Scott | 1982 | Thriller | Blade Runner |
| Michael | Cimino | 1978 | War | The Deer Hunter |

---

### 35. Write a SQL query to find the movies released before 1st January 1989. Sort the result-set in descending order by date of release. Return movie title, release year, date of release, duration, and first and last name of the director.
```sql
select m.mov_title,year(m.mov_dt_rel),m.mov_time,m.mov_dt_rel, d.dir_fname,d.dir_lname from
	movie as m join movie_direction as md on m.mov_id=md.mov_id
    join director as d on md.dir_id=d.dir_id
    where m.mov_dt_rel < date('1989-01-01') order by m.mov_dt_rel desc;
```
**output**
| mov_title | year(m.mov_dt_rel) | mov_time | mov_dt_rel | dir_fname | dir_lname |
|-----------|--------------------|----------|------------|-----------|-----------|
| Aliens | 1986 | 137 | 1986-08-29 | James | Cameron |
| Amadeus | 1985 | 160 | 1985-01-07 | Milos | Forman |
| Deliverance | 1982 | 109 | 1982-10-05 | John | Boorman |
| Blade Runner | 1982 | 117 | 1982-09-09 | Ridley | Scott |
| The Deer Hunter | 1979 | 183 | 1979-03-08 | Michael | Cimino |
| Annie Hall | 1977 | 93 | 1977-04-20 | Woody | Allen |
| Chinatown | 1974 | 130 | 1974-08-09 | Roman | Polanski |
| Lawrence of Arabia | 1962 | 216 | 1962-12-11 | David | Lean |
| The Innocents | 1962 | 100 | 1962-02-19 | Jack | Clayton |
| Vertigo | 1958 | 128 | 1958-08-24 | Alfred | Hitchcock |

---

### 36. Write a SQL query to calculate the average movie length and count the number of movies in each genre. Return genre title, average time and number of movies for each genre.
```sql
select g.gen_title,count(m.mov_id),avg(mov_time) from
	movie as m join movie_genres as mg on m.mov_id=mg.mov_id
    join genres as g on mg.gen_id=g.gen_id
    group by g.gen_id;
```
**output**
| gen_title | count(m.mov_id) | avg(mov_time) |
|-----------|------------------|---------------|
| Action | 1 | 137.0000 |
| Adventure | 2 | 162.5000 |
| Animation | 1 | 134.0000 |
| Comedy | 1 | 93.0000 |
| Crime | 2 | 124.0000 |
| Drama | 4 | 129.2500 |
| Horror | 1 | 100.0000 |
| Music | 1 | 118.0000 |
| Mystery | 3 | 134.3333 |
| Romance | 1 | 122.0000 |
| Thriller | 1 | 117.0000 |
| War | 1 | 183.0000 |

---

### 37. Write a SQL query to find movies with the shortest duration. Return movie title, movie year, director first name, last name, actor first name, last name and role.
```sql
select m.mov_title,m.mov_year,d.dir_fname,d.dir_lname,a.act_fname,a.act_lname,mc.role from
	movie as m join movie_direction as md on m.mov_id=md.mov_id
    join director as d on md.dir_id=d.dir_id
    join movie_cast as mc on m.mov_id=mc.mov_id
    join actor as a on mc.act_id=a.act_id
    where m.mov_time in 
	(select min(mov_time) from movie);
```
**output**
| mov_title | mov_year | dir_fname | dir_lname | act_fname | act_lname | role |
|-----------|----------|-----------|-----------|-----------|-----------|------|
| Annie Hall | 1977 | Woody | Allen | Woody | Allen | Alvy Singer |

---

### 38. Write a SQL query to find the years in which a movie received a rating of 3 or 4. Sort the result in increasing order on movie year.
```sql
select m.mov_year from
	movie as m join movie_rating as mr on m.mov_id=mr.mov_id
    where mr.rev_stars=3 or mr.rev_stars=4
    group by m.mov_year order by m.mov_year;
```
**output**
| mov_year |
|----------|
| 1997 |

---

### 39. Write a SQL query to get the reviewer name, movie title, and stars in an order that reviewer name will come first, then by movie title, and lastly by number of stars.
```sql
select mr.rev_name as reviewer_name,m.mov_title,r.rev_stars from
	movie as m join movie_rating as r on m.mov_id=r.mov_id
    join movie_reviewer as mr on r.rev_id=mr.rev_id
    order by mr.rev_name,m.mov_title,r.rev_stars;
```
**output**
| reviewer_name | mov_title | rev_stars |
|---------------|-----------|-----------|
|  | Blade Runner | 8.20 |
|  | Princess Mononoke | 8.40 |
| Brandt Sponseller | Aliens | 8.40 |
| Flagrant Baronessa | Lawrence of Arabia | 8.30 |
| Hannah Steele | Donnie Darko | 8.10 |
| Jack Malvern | The Innocents | 7.90 |
| Josh Cates | Good Will Hunting | 4.00 |
| Krug Stillo | Seven Samurai | 7.70 |
| Mike Salvati | Annie Hall | 8.10 |
| Neal Wruck | Chinatown |  |
| Paul Monks | Boogie Nights | 3.00 |
| Richard Adams | Beyond the Sea | 6.70 |
| Righty Sock | Titanic | 7.70 |
| Righty Sock | Vertigo | 8.40 |
| Sasha Goldshtein | American Beauty | 7.00 |
| Scott LeBrun | Trainspotting |  |
| Simon Wright | The Usual Suspects | 8.60 |
| Victor Woeltjen | Avatar | 7.30 |
| Vincent Cadena | Slumdog Millionaire | 8.00 |

---

### 40. Write a SQL query to find those movies that have at least one rating and received the most stars. Sort the result-set on movie title. Return movie title and maximum review stars.
```sql
select m.mov_title,mr.rev_stars from
	movie as m join movie_rating as mr on m.mov_id=mr.mov_id
    where mr.num_o_ratings>=1 and mr.rev_stars in
    (select max(rev_stars) from movie_rating)
    order by m.mov_title;
```
**output**
| mov_title | rev_stars |
|-----------|-----------|
| The Usual Suspects | 8.60 |

---

### 41. Write a SQL query to find out which movies have received ratings. Return movie title, director first name, director last name and review stars.
```sql
select m.mov_title, d.dir_fname,d.dir_lname, mr.rev_stars from
	movie as m join movie_rating as mr on m.mov_id=mr.mov_id
    join movie_direction as md on m.mov_id=md.mov_id
    join director as d on md.dir_id=d.dir_id
    where mr.num_o_ratings is not NULL;
```
**output**
| mov_title | dir_fname | dir_lname | rev_stars |
|-----------|-----------|-----------|-----------|
| Vertigo | Alfred | Hitchcock | 8.40 |
| The Innocents | Jack | Clayton | 7.90 |
| Lawrence of Arabia | David | Lean | 8.30 |
| Blade Runner | Ridley | Scott | 8.20 |
| The Usual Suspects | Bryan | Singer | 8.60 |
| Chinatown | Roman | Polanski |  |
| Boogie Nights | Paul | Thomas Anderson | 3.00 |
| Annie Hall | Woody | Allen | 8.10 |
| American Beauty | Sam | Mendes | 7.00 |
| Titanic | James | Cameron | 7.70 |
| Good Will Hunting | Gus | Van Sant | 4.00 |
| Trainspotting | Danny | Boyle |  |
| Donnie Darko | Richard | Kelly | 8.10 |
| Slumdog Millionaire | Danny | Boyle | 8.00 |
| Aliens | James | Cameron | 8.40 |
| Beyond the Sea | Kevin | Spacey | 6.70 |

---

### 42. Write a SQL query to find movies in which one or more actors have acted in more than one film. Return movie title, actor first and last name, and the role.
```sql
select m.mov_title,a.act_fname,a.act_lname,mc.role from
	movie m join movie_cast mc on m.mov_id=mc.mov_id
    join actor a on mc.act_id=a.act_id
    where mc.act_id in
    (select act_id from movie_cast group by act_id having count(act_id)>1);
```
**output**
| mov_title | act_fname | act_lname | role |
|-----------|-----------|-----------|------|
| American Beauty | Kevin | Spacey | Lester Burnham |
| Beyond the Sea | Kevin | Spacey | Bobby Darin |

---

### 43. Write a SQL query to find the actor whose first name is 'Claire' and last name is 'Danes'. Return director first name, last name, movie title, actor first name and last name, role.
```sql
select d.dir_fname,d.dir_lname,m.mov_title,a.act_fname,a.act_lname,mc.role from
	movie m join movie_cast mc on m.mov_id=mc.mov_id
    join movie_direction md on m.mov_id=md.mov_id
    join director d on md.dir_id=d.dir_id
    join actor a on mc.act_id=a.act_id
    where a.act_fname="Claire" and a.act_lname="Danes";
```
**output**
| dir_fname | dir_lname | mov_title | act_fname | act_lname | role |
|-----------|-----------|-----------|-----------|-----------|------|
| Hayao | Miyazaki | Princess Mononoke | Claire | Danes | San |

---

### 44. Write a SQL query to find for actors whose films have been directed by them. Return actor first name, last name, movie title and role.
```sql
select a.act_fname,a.act_lname,m.mov_title,mc.role from 
	actor a join movie_cast mc on a.act_id = mc.act_id
	join movie m on mc.mov_id = m.mov_id
	join movie_direction md on m.mov_id = md.mov_id
	join director d on md.dir_id = d.dir_id
	where a.act_fname = d.dir_fname and a.act_lname = d.dir_lname;
```
**output**
| act_fname | act_lname | mov_title | role |
|-----------|-----------|-----------|------|
| Woody | Allen | Annie Hall | Alvy Singer |
| Kevin | Spacey | Beyond the Sea | Bobby Darin |

---

### 45. Write a SQL query to find the cast list of the movie 'Chinatown'. Return first name, last name.
```sql
select a.act_fname, a.act_lname from 
	actor a join movie_cast mc on a.act_id = mc.act_id
	join movie m on mc.mov_id = m.mov_id
	where m.mov_title = 'Chinatown';
```
**output**
| act_fname | act_lname |
|-----------|-----------|
| Jack | Nicholson |

---

### 46. Write a SQL query to find those movies where actor's first name is 'Harrison' and last name is 'Ford'. Return movie title.
```sql
select m.mov_title from 
	movie m join movie_cast mc on m.mov_id = mc.mov_id
	join actor a on mc.act_id = a.act_id
	where a.act_fname = 'Harrison' and a.act_lname = 'Ford';
```
**output**
| mov_title |
|-----------|
| Blade Runner |

---

### 47. Write a SQL query to find the highest-rated movies. Return movie title, movie year, review stars and releasing country.
```sql
select m.mov_title,m.mov_year,mr.rev_stars,m.mov_rel_country from 
	movie m join movie_rating mr on m.mov_id = mr.mov_id
	where mr.rev_stars = 
    (select max(rev_stars) from movie_rating);
```
**output**
| mov_title | mov_year | rev_stars | mov_rel_country |
|-----------|----------|-----------|-----------------|
| The Usual Suspects | 1995 | 8.60 | UK |

---

### 48. Write a SQL query to find the highest-rated 'Mystery Movies'. Return the title, year, and rating.
```sql
select m.mov_title,m.mov_year,mr.rev_stars from 
	movie m join movie_genres mg on m.mov_id = mg.mov_id
	join movie_rating mr on m.mov_id = mr.mov_id
    join genres g on mg.gen_id=g.gen_id
	where g.gen_title = 'Mystery' and mr.rev_stars = 
    (select max(mr2.rev_stars) from 
		movie_rating mr2 join movie_genres mg2 on mr2.mov_id = mg2.mov_id
        join genres g2 on mg2.gen_id=g.gen_id
		where g2.gen_title = 'Mystery');
```
**output**
| mov_title | mov_year | rev_stars |
|-----------|----------|-----------|
| Vertigo | 1958 | 8.40 |

---

### 49. Write a SQL query to find the years when most of the 'Mystery Movies' produced. Count the number of generic title and compute their average rating. Group the result set on movie release year, generic title. Return movie year, generic title, number of generic title and average rating.
```sql
select m.mov_year,g.gen_title,count(g.gen_title) as genre_count,avg(mr.rev_stars) as avg_rating
	from movie m join movie_genres mg on m.mov_id = mg.mov_id
    join genres g on mg.gen_id=g.gen_id
	join movie_rating mr on m.mov_id = mr.mov_id
	where g.gen_title = 'Mystery'
	group by m.mov_year, g.gen_title
	having count(g.gen_title) = 
		(select max(cnt) from 
			(select count(*) as cnt 
				from movie m2 join movie_genres mg2 on m2.mov_id = mg2.mov_id
                join genres g2 on mg2.gen_id=g2.gen_id
				where g2.gen_title = 'Mystery'
				group by m2.mov_year) as temp);
```
**output**
| mov_year | gen_title | genre_count | avg_rating |
|----------|-----------|-------------|------------|
| 1958 | Mystery | 1 | 8.400000 |

---

### 50. Write a query in SQL to generate a report, which contain the fields movie title, name of the female actor, year of the movie, role, movie genres, the director, date of release, and rating of that movie.
```sql
select m.mov_title,a.act_fname,a.act_lname,m.mov_year,mc.role,g.gen_title,d.dir_fname,d.dir_lname,m.mov_dt_rel,mr.rev_stars
	from movie m join movie_cast mc on m.mov_id = mc.mov_id
	join actor a on mc.act_id = a.act_id
	join movie_genres mg on m.mov_id = mg.mov_id
    join genres g on mg.gen_id = g.gen_id
	join movie_direction md on m.mov_id = md.mov_id
	join director d on md.dir_id = d.dir_id
	left join movie_rating mr on m.mov_id = mr.mov_id
	where a.act_gender = 'F';
```
**output**
| mov_title | act_fname | act_lname | mov_year | role | gen_title | dir_fname | dir_lname | mov_dt_rel | rev_stars |
|-----------|-----------|-----------|----------|------|-----------|-----------|-----------|------------|-----------|
| The Innocents | Deborah | Kerr | 1961 | Miss Giddens | Horror | Jack | Clayton | 1962-02-19 | 7.90 |
| Eyes Wide Shut | Nicole | Kidman | 1999 | Alice Harford | Mystery | Stanley | Kubrick |  |  |
| Princess Mononoke | Claire | Danes | 1997 | San | Animation | Hayao | Miyazaki | 2001-10-19 | 8.40 |
| Aliens | Sigourney | Weaver | 1986 | Ripley | Action | James | Cameron | 1986-08-29 | 8.40 |

---
