// const API_KEY = "baacee587b52679e93f67d12424c4cb3"
// const  API_URL_MOVIE = "https://api.themoviedb.org/3/discover/movie?language=ru-RUS&api_key=baacee587b52679e93f67d12424c4cb3"

const getMovies = async () =>{
let res = await fetch("https://api.themoviedb.org/3/discover/movie?language=ru-RUS&api_key=baacee587b52679e93f67d12424c4cb3")
    let data = await res.json()

}
getMovies()

const showMovies = document.querySelector(".movies")

data.forEach(el => {
    const moviesEl = document.createElement("div")
    movieEl.classList.add("movie")
    movieEl.innerHTML = `<div class="movie__cover-inner">
    <img class="movie__cover" src="${el.poster_path}" alt="${el.title}">
    <div class="movie__dark"></div>
</div>
<div class="movie__info">
    <div class="movie__title">${el.title}</div>
    <div class="movie__category">${el.genre_ids.map(genre => `${genre.genre}`)}</div>
    <div class="movie__average movie__average-color">${el.vote_average}</div>
</div>`;
moviesEl.appendChild(movieEl)
});










// getMovies(API_URL_MOVIE);

// async function getMovies(url){
//     const res = await fetch(url, {
//         headers: {
//             "Content-Type": "applications/json",
//             "X-API_KEY": API_KEY,
//         },
//     });
//     const resData = await res.json();
//     console.log(resData);
// }
