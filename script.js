
const api_key = '80499a64a51f7b88c3f5ceab77272dde';
const base_url = 'https://api.themoviedb.org/3';
//const api_url = base_url + 
const img_url = 'https://image.tmdb.org/t/p/w500';

function getMovies(url){

    fetch(url).then(res => res.json()).then(data => {
        console.log(data);
    })
}

function showMovies(data) {

    data.forEach(movie => {
        const movieE1 = document.createElement('div');
        movieE1.classList.add('movie');
        


    })
}