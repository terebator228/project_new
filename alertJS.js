
'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 0 )

let personalMovieDB = {
  count: numberOfFilms,
<<<<<<< HEAD
  movies: {},
  actors: {},
=======
  movies: [],
  actors: [],
>>>>>>> main
  genres: [],
  privat: false,
};

let movies = {};

let key = prompt('Один из последних просмотренных фильмов?');

let score = +prompt('На сколько оцените его?');

movies[key] = score;

console.log(movies);

 