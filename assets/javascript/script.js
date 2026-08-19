/*fetch response from api and asign it to a variable*/
    
const searchResponse = function () {//search results assigned to variable for reusability
    let search = "pacific rim"

    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=68dd180a&t=${search}`)
    .then(response => response.json())
    .then(data => {
    console.log(data)
        
    //get the elements to represent the returned movie information
    let movieTitle = $("#movie-title");
    let movieYear = $(".movie-year");
    let movieActors = $(".movie-actors");
    let movieDirector = $(".movie-director");
    let moviePlot = $("#movie-plot");


    //create and append label, along with the data to the corresponding elements for movie info
    movieTitle.html(`<label class=movie-info-label>Movie: </label> ${data.Title}`);
    movieYear.html(`<label class=movie-info-label>Year: </label> ${data.Year}`);
    movieActors.html(`<label class=movie-info-label>Actors: </label> ${data.Actors}`);
    movieDirector.html(`<label class=movie-info-label>Director: </label> ${data.Director}`);
    moviePlot.html(`<label class=movie-info-label>Plot: </label> ${data.Plot}`); 
    
    //set img attribute to display movie poster
    $(".movie-poster").attr("src", data.Poster);//set the poster image for the movie
    $("movie-poster").attr("alt", `Poster image for the movie ${data.Title}`)//show for which movie the poster is for
    })

    
    //show movie-info element when user clicks on the search movie button, and the functions runs
    let display = "show"

    if(display  === "show") {
       $(".movie-info").css({"visibility":"visible"}) 
    }
    
}

searchResponse()
