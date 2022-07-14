
'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 0 )

let personalMovieDB = {
  count: numberOfFilms,
  movies: [],
  actors: [],
  genres: [],
  privat: false,
};

console.log(personalMovieDB);
 