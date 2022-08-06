/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const ads = document.querySelectorAll(".promo__adv"),
          genre = document.querySelector(".promo__genre"),
          bg = document.querySelector(".promo__bg"),
          movieList = document.querySelector(".promo__interactive-list"),
          input = document.querySelector(".adding__input"),
          btn = document.getElementsByTagName("button"),
          checkbox = document.querySelector("[type='checkbox']"),
          addForm = document.querySelector("form.add");
    
    const deleteAdv = (arr) => {
        for(let item of arr) {
            item.remove();
        };
    }
    
    deleteAdv(ads);
    
    const makeChanges = () => {
        genre.textContent = "драма";
    
        bg.style.background = "url('../project/img/bg.jpg.') center center/cover no-repeat";
    }

    makeChanges();

    const sortArr = (arr) => {
        arr.sort();
    }
    
    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = input.value;
        const favorite = checkbox.checked;

        if (newFilm) {

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (favorite) {
                console.log('Добавляем любимый фильм');
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
    
            createMovieList(movieDB.movies, movieList);
        }

        event.target.reset();
    })

    function createMovieList(films, parent) {
        parent.innerHTML = '';
        sortArr(films);
        
        films.forEach((film, i)=> {
            parent.innerHTML += `<li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>`
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parent);
            })
        })
    }

    createMovieList(movieDB.movies, movieList);

    /*
    input.addEventListener('change', (event) => {
        film = event.target.value;
        if(film.length > 21) {
            film = film.substr(0, 21) + '...';
        }
    } );
    
    btn[0].addEventListener('click', (e) => {
        e.preventDefault();
        
        movieDB.movies.push(film);
    
        movieDB.movies.sort();
    
        movieList.innerHTML = '';
    
        movieDB.movies.forEach((film, i)=> {
            movieList.innerHTML += `<li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>`
        });
    
        trashbin = document.querySelectorAll(".delete");
        console.log(movieDB.movies);
        console.log(trashbin);
    })
    
    checkbox.addEventListener('change', function() {
        if (this.checked) {
          console.log("Добавляем любимый фильм");
        } 
      });
    
    function reload() {
        movieDB.movies.sort();
    
        movieList.innerHTML = '';
    
        movieDB.movies.forEach((film, i)=> {
            movieList.innerHTML += `<li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>`
        });
    
        trashbin = document.querySelectorAll(".delete");
    };
    
    function deleteFilm() {
        trashbin.forEach((item, i) => {
            item.addEventListener('click', () => {
                
                movieDB.movies.splice(i, 1);
        
                reload();
               
                deleteFilm();
            })
            
        })
    }
    
    deleteFilm();
    */
})

