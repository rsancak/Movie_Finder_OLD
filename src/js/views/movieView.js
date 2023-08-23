import { elements } from '../base';

export const backToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const closeDetails = () => {
  elements.movieDetailsContainer.classList.remove('d-block');
  elements.movieDetailsContainer.classList.add('d-none');
};

export const displayMovie = (movie) => {
  let html = '<div class="row">';
  let genres = "";
  movie.genres.forEach((genre) => {
    genres += `<span class="badge bg-primary" style="margin-right: 5px">${genre.name}</span>`;
  });
  html += `
        <div class="col-md-2">
            <img style="height: fit-content;" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" onerror="this.src='https://via.placeholder.com/92x138';" class="mr-3 w-100" alt="${movie.title}">
        </div>
        <div class="col-10">
            <div>
                <h5>${movie.original_title} <small class="badge bg-primary">${movie.vote_average}</small></h5>
                <p>${movie.overview}</p>
                ${genres}
            </div>
        </div>   
    `;

  html += '</div>';

  elements.movieDetailsContainer.classList.remove('d-none');
  elements.movieDetailsContainer.classList.add('d-block');
  elements.movieDetails.innerHTML = html;
};
