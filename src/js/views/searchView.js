import { elements } from '../base';

export const clearInput = () => {
  elements.searchInput.value = '';
};

export const clearResults = () => {
  elements.movieList.innerHTML = '';
};

export const displayResults = (keyword, data) => {
  data.results.forEach((movie) => {
    const html = `
            <li class="media mb-3">
                <div class="row">
                    <img class="mr-3 col-2" style="height: fit-content;" src="https://image.tmdb.org/t/p/w92/${movie.poster_path}" onerror="this.src='https://via.placeholder.com/92x138';" alt="${movie.title}">
                    <div class="media-body col-10">
                        <h5 class="mt-0 mb-1">                            
                            <a href="#${movie.id}">${movie.title}</a>
                            <span class="badge bg-success">${movie.vote_average}</span> 
                        </h5>
                        <p>${movie.overview}</p>
                    </div>
                </div>
            </li>
        `;

    elements.movieListHeader.innerHTML = `"${keyword}" ${data.total_results} results found.`;
    elements.movieListContainer.classList.remove('d-none');
    elements.movieListContainer.classList.add('d-block');
    elements.movieList.insertAdjacentHTML('beforeend', html);
  });
};
