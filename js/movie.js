

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
        //inject api data into an object
        let movieResponseData = {
          title: data.Title,
          data: data.Year,
          director: data.Director,
          actors: data.Actors,
          plot: data.Plot,
          poster: data.Poster

        };

        console.log(`api reponse object ${movieResponseData.plot}`)
        const movieInfoContainer = document.createElement("div");
        movieInfoContainer.className = "movie-info container";
        //create children elements to display the movie info
        const movieTitle = document.createElement("h2");
        movieTitle.textContent = movieResponseData.title;
        movieInfoContainer.appendChild(movieTitle);
        const movieYear = document.createElement("p");
        movieYear.textContent = movieResponseData.year;
        movieInfoContainer.appendChild(movieYear);
        const movieDirector = document.createElement("p");
        movieDirector.textContent = movieResponseData.director;
        movieInfoContainer.appendChild(movieDirector);
        const movieActors = document.createElement("p");
        movieActors.textContent = movieResponseData.actors;
        movieInfoContainer.appendChild(movieActors);
        const moviePlot = document.createElement("p");
        moviePlot.textContent = movieResponseData.plot;
        movieInfoContainer.appendChild(moviePlot);
        const moviePoster = document.createElement("img");
        moviePoster.src = movieResponseData.poster;
        moviePoster.className = "poster";
        movieInfoContainer.appendChild(moviePoster);
        //remove placeholder text from movie info div
        document.querySelector(".result-container").textContent = "";
        //append movie info container to the parent result container
        document.querySelector(".result-container").appendChild(movieInfoContainer)

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