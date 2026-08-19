document.getElementById("user-search").addEventListener("submit", function(event) {
    let searchInput = event.target.searchInput.value;//get value from user input

    let apiUrl = `http://www.omdbapi.com/?i=tt3896198&apikey=68dd180a&t=${searchInput}`
    
    event.preventDefault()//prevent the default behaviour of the form
    /*fetch response from api and append the append the resulting data to elements*/
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data, searchInput)

                //get the elements to represent the returned movie information
                let movieTitle = $("#movie-title");
                let movieYear = $(".movie-year");
                let movieActors = $(".movie-actors");
                let movieDirector = $(".movie-director");
                let moviePlot = $("#movie-plot");
                
                console.log(searchInput)
                    //create and append label, along with the data to the corresponding elements for movie info
                    movieTitle.html(`<label class=movie-info-label>Movie: </label> ${data.Title}`);
                    movieYear.html(`<label class=movie-info-label>Year: </label> ${data.Year}`);
                    movieActors.html(`<label class=movie-info-label>Actors: </label> ${data.Actors}`);
                    movieDirector.html(`<label class=movie-info-label>Director: </label> ${data.Director}`);
                    moviePlot.html(`<label class=movie-info-label>Plot: </label> ${data.Plot}`); 
                    //set img attribute to display movie poster
                    $(".movie-poster").attr("src", data.Poster);//set the poster image for the movie
                    $("movie-poster").attr("alt", `Poster image for the movie ${data.Title}`)//show for which movie the poster is for
                    $(".movie-info").css({"visibility": "visible"})//show the .movie-info div with the search results
        
        })
       event.target.searchInput.value = ""//reset the input field
})