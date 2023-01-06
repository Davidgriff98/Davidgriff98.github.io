
const api_key = '80499a64a51f7b88c3f5ceab77272dde';
const base_url = 'https://api.themoviedb.org/3';
const api_url = base_url + '/discover/movie?sort_by=popularity.desc';
const img_url = 'https://image.tmdb.org/t/p/w500';

const main = document.getElementById('main');

function getMovies(url){

    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results)
        showMovies(data.results);
    })
}

function showMovies(data) {
    main.innerHTML = '';

    data.forEach(movie => {
        const {title, poster, overview} = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
        <img src = "${img_url + poster_path }" alt="${title}">

        <div class="movie-info">
          <h3>${title}</h3> 
          
        </div>

        <div class="overview">
            <h3>"overview"</h3>
            ${overview}


          </div>
        
        
        `
        main.appendChild(movieEl)


    })
}