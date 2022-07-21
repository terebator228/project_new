
'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы просмотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы просмотрели?', '');
    };
};

start();


let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    rememberMyFilms: function() {
        for(let i = 0; i < 2; i++) {
            let a = prompt('Какой из последних фильмов вы смотрели?', ''),
                b = +prompt('На сколько баллов вы его оценили?', '');
        
            if(a.length >= 50 || !a || b.length >= 50 || !b) {
                console.log('Ошибка');
                i--;
            };
        
            personalMovieDB.movies[a] = b;
        };
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else  if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        };
    },
    writeYourGenres: function() {
        for(let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`, "");
            
            while(!genre) {
                genre = prompt(`Ваш любимый жанр под номером ${i}`, "");
            };
            
            personalMovieDB.genres.push(genre);
    
        };
        personalMovieDB.genres.forEach(function(item, i) {
            console.log(`Любимый жанр ${i + 1} - это ${item}`)
        });
    },
    showMyDB: function(privat) {
        if(!privat) {
            console.log(personalMovieDB);
        };
    },
    toggleVisibleMyDB: function() {
        if(personalMovieDB.privat === false) {
            personalMovieDB.privat = true;
        } else personalMovieDB.privat = false;
    },
};

/*
console.log(personalMovieDB.privat);
console.log(personalMovieDB.showMyDB());
personalMovieDB.toggleVisibleMyDB(personalMovieDB.privat);
console.log(personalMovieDB.privat);
console.log(personalMovieDB.showMyDB(personalMovieDB.privat));
*/

personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();


