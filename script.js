const getMovies = async () =>{
let res = await fetch("https://api.themoviedb.org/3/discover/movie?language=ru-RUS&api_key=baacee587b52679e93f67d12424c4cb3")
    let data = await res.json()
    foreachData(data.results)
}
getMovies()

const foreachData = (arr) =>{
    arr.forEach((el) =>{
        const moviesEl = document.querySelector(".movies")
        const movieEl = document.createElement("div")
        movieEl.classList.add("movie")
        moviesEl.appendChild(movieEl)

        const getColor = (color) =>{
            if(color >= 7.7) {
                return "green"
            }else if (color > 6.5){
                return "orange"
            }else{
                return "red"
            }
        }
        movieEl.innerHTML = `<div class="movie__cover-inner">
        <img class="movie__cover" src="" alt="${el.title}">
        <div class="movie__dark"></div>
    </div>
    <div class="movie__info">
        <div class="movie__title">${el.title}</div>
        <div class="movie__category">${el.genre_ids.map(genre => ` ${genre.genre}`)}</div>
        <div class="movie__average movie__average-${getColor(el.vote_average)}">${el.vote_average}</div>
    </div>`;  
    movieEl.addEventListener("click",() => openModal(el.id))    
    })

    
}

// _____MODAL______

// const modalEl = document.querySelector(".modal")

// let openModal = async (id) =>{
//     console.log(id);
//     modalEl.classList.add("modal-show")
// }

// const modalEl = document.querySelector(".modal")

// async function openModal(id) {
//     console.log(id);
//     modalEl.classList.add("modal--show")
//     modalEl.innerHTML = `
//     <div class="modal__card">
//       <img class="modal__movie-backdrop" src="${respData.posterUrl}" alt="">
//       <h2>
//         <span class="modal__movie-title">${respData.nameRu}</span>
//         <span class="modal__movie-release-year"> - ${respData.year}</span>
//       </h2>
//       <ul class="modal__movie-info">
//         <div class="loader"></div>
//         <li class="modal__movie-genre">Жанр - ${respData.genres.map((el) => `<span>${el.genre}</span>`)}</li>
//         ${respData.filmLength ? `<li class="modal__movie-runtime">Время - ${respData.filmLength} минут</li>` : ''}
//         <li >Сайт: <a class="modal__movie-site" href="${respData.webUrl}">${respData.webUrl}</a></li>
//         <li class="modal__movie-overview">Описание - ${respData.description}</li>
//       </ul>
//       <button type="button" class="modal__button-close">Закрыть</button>
//     </div>
//   `
//   const btnClose = document.querySelector(".modal__button-close");
//   btnClose.addEventListener("click", () => closeModal());
// }

// function closeModal() {
//     modalEl.classList.remove("modal--show")
// }

