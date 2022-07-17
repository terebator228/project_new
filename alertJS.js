
'use strict';

let numberOfFilms = '';
let a = '',
    b = '',
    c = '',
    d = '';
    
while (numberOfFilms == '' || !numberOfFilms) {
    numberOfFilms = +prompt('Сколько фильмво вы просмотрели?', '');
};

while (a.length >= 50 || !a ) {
    a = prompt('Какой из последних фильмов вы смотрели?', '');
};

while (b.length >= 50 || !b ) {
    b = +prompt('На сколько баллов вы его оценили?', '');
};

while (c.length >= 50 || !c ) {
    c = prompt('Какой из последних фильмов вы смотрели?', '');
}

while (d.length >= 50 || !d ) {
    d = +prompt('На сколько баллов вы его оценили?', '');
}

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}

if(personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов", '')
} else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert("Вы классический зритель", '');
} else if(personalMovieDB.count > 30) {
    alert("Вы киноман", '');
};
