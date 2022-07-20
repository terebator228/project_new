
'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы просмотрели?', '').trim();

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы просмотрели?', '').trim();
    };
};

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms() {
    for(let i = 0; i < 2; i++) {
        let a = prompt('Какой из последних фильмов вы смотрели?', '').trim(),
            b = +prompt('На сколько баллов вы его оценили?', '').trim();
    
        if(a.length >= 50 || !a || b.length >= 50 || !b) {
            console.log('Ошибка');
            i--;
        };
    
        personalMovieDB.movies[a] = b;
    };
};

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else  if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    };
}

detectPersonalLevel();

function writeYourGenres() {
    for(let i = 1; i <= 3; i++) {
        let genre = prompt(`Ваш любимый жанр под номером ${i}`, "").trim();
        
        while(!genre) {
            genre = prompt(`Ваш любимый жанр под номером ${i}`, "").trim();
        };
        
        personalMovieDB.genres.push(genre);

    }
}

writeYourGenres()

function showMyDB(privat) {
    if(!privat) {
        console.log(personalMovieDB);
    };
};

showMyDB(personalMovieDB.privat);

/*while (numberOfFilms == '' || !numberOfFilms) {
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



if(personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов", '')
} else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert("Вы классический зритель", '');
} else if(personalMovieDB.count > 30) {
    alert("Вы киноман", '');
}; */
