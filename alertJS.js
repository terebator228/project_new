
'use strict';

let numberOfFilms = '';
let a = '',
    b = '',
    c = '',
    d = '';
    
while (numberOfFilms == '' || !numberOfFilms) {
  numberOfFilms = +prompt('Сколько фильмво вы просмотрели?', '');
};

while (a == '' || a.length >= 50 || !a ) {
  a = prompt('Какой из последних фильмов вы смотрели?', '');

  while (b == '' || b.length >= 50 || !b ) {
    b = +prompt('На сколько баллов вы его оценили?', '');
  };

};

while (c == '' || c.length >= 50 || !c ) {
  c = prompt('Какой из последних фильмов вы смотрели?', '');

  while (d == '' || d.length >= 50 || !d ) {
    d = +prompt('На сколько баллов вы его оценили?', '');
  }

}

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
}
console.log(personalMovieDB);
