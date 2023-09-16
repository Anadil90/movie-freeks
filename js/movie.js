

const API_KEY = 24358589; //use api key for the OMDB api
const searchButton = document.getElementById('searchButton') //search movie
const searchTitle = document.getElementsByClassName("search-input")[0]; //movie title input
const resultContainer = document.getElementsByClassName("result-container")[0]; //div to output the api response data

searchButton.addEventListener('click', () => {

  const movieTitle = searchTitle.value; //get value from input
  
  if(movieTitle){
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&t=${movieTitle}&p=5`) //fetch response from api
    .then(response => response.json())
    .then(data => {
      if(data.Response) {
        console.log(data)
        //default container to display the movie search results
        // create movie info div tempate by setting inner HTML of the result container div
        const movieInfo = ` 
        <div class="movie-info">
        <h2 class="info-group">${data.Title}</h2> 
        <p class="info-group"><strong>Year:</strong> ${data.Year}</p>
        <p class="info-group"><strong>Director:</strong>${data.Director}</p>
        <p class="info-group"><strong>Actors</strong>${data.Actors}</p> 
        <p class="description">${data.Plot}</p>
        <img class="poster" src=${data.Poster}/>
        </div>
        `;
        
       resultContainer.innerHTML = movieInfo; // change innerHTML text to the api response text

      } else {
        resultContainer.innerHTML = `<p>An Error Occured`; // show error message if unable to fetch data from api

      }
    })
    .catch(error =>{
      console.log(error);
      resultContainer.innerHTML = `<p>An Error Occured While Fetching` //show error message in the output div
    })
  }
})