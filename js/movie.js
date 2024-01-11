

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
          poster: data.Poster,
          imdbRating: data.Ratings[0].Value,
          year: data.Year
        };

        console.log(`api reponse object ${movieResponseData.plot}`)
        const movieInfoContainer = document.createElement("div");
        movieInfoContainer.className = "movie-info container";
        //create children elements to display the movie info
        const row = document.createElement("div");
        row.className = 'row';
        const column1 = document.createElement("div");
        column1.className = "col-md-6";
        const column2 = document.createElement("div");
        column2.className = "col-md-6";
        const movieTitle = document.createElement("h2");
        movieTitle.textContent = movieResponseData.title;
        column2.appendChild(movieTitle);
        const rating = document.createElement("span");
        rating.className = "imdb-rating";
        rating.textContent = `IMDB rating: ${movieResponseData.imdbRating}`;
        column2.appendChild(rating);
        const movieYear = document.createElement("p");
        movieYear.textContent = `Year released: ${movieResponseData.year}`;
        column2.appendChild(movieYear);
        const movieDirector = document.createElement("p");
        movieDirector.textContent = `Director: ${movieResponseData.director}`;
        column2.appendChild(movieDirector);
        const movieActors = document.createElement("p");
        movieActors.textContent = `Actors: ${movieResponseData.actors}`;
        column2.appendChild(movieActors);
        const moviePlot = document.createElement("p");
        moviePlot.textContent = `Plot: ${movieResponseData.plot}`;
        column2.appendChild(moviePlot);
        const moviePoster = document.createElement("img");
        moviePoster.src = movieResponseData.poster;
        moviePoster.className = "poster";
        column1.appendChild(moviePoster);
        //remove placeholder text from movie info div
        document.querySelector(".result-container").textContent = "";
        //append columns to row
        row.appendChild(column1);
        row.appendChild(column2);
        //append row to movie info container
        movieInfoContainer.appendChild(row);
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

const socialIcons = document.querySelector(".leftbar-item");
//rightbar click events
socialIcons.addEventListener("click", () => {
  console.log("clicked")
})
