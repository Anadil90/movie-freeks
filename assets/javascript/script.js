document.getElementById("user-search").addEventListener("submit", function(event) {
    let searchInput = event.target.searchInput.value;//get value from user input
    let searchQuery = searchInput;
    
    const options = {
            method: 'GET',
            headers: {accept: 'application/json', Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMWU0MjUyN2NlYTEwZjZkMmIyZjc5YzdkZDliNWU3MSIsIm5iZiI6MTc4NzI1MDQzMi41MjE5OTk4LCJzdWIiOiI2YTg3NDcwMGEyYmI0NWZjZTVkZmFmNTYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Ux6TU9ZcnY24Tige53uoG8PRodfROzF9FOWYJVmW3r4'} //... here refers to the read access token given to TMDB user
        };
    
    event.preventDefault()//Prevent the default behaviour of the form
    /*Fetch response from api and append the append the resulting data to elements*/
    fetch(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`, options)
    .then(res => res.json())
    .then(data =>  {
        for(result of data.results) {//loop through the api response and assign the data to variable result

            let searchResults;
            //Filter out the api response data to return only the object correponding to the search query
            const matches = data.results.filter(//Filter the data response from the api directly and return the result that matches with search query 
                movie => {

                const originalTitle = movie.original_title.toLowerCase();
                const langIsEnglish = movie.original_language === "en";
                const searchQueryLowerCased = searchQuery.toLowerCase();
                
                if(originalTitle === searchQueryLowerCased && langIsEnglish) {
                    console.log("found match: ", originalTitle, movie)
                    return movie.original_title.toLowerCase() === searchQuery.toLowerCase()//Transform to lowercase to perform strict matching
                }
                    
                });
                

        }
    })
    .catch(err => console.error(err));
             //get the elements to represent the returned movie information
              /*  let movieTitle = $("#movie-title");
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

                    //show for which movie the poster is for
                    $("movie-poster").attr("alt", `Poster image for the movie ${data.Title}`)

                    $(".movie-info").css({"visibility": "visible"})//show the .movie-info div with the search results
                    $(".post-comment").css({"visibility": "visible"})//show post comment button with search results
                    $(".movie-comments").css({"visibility": "visible"})//show the movie comments div 

        
    
       event.target.searchInput.value = ""//reset the input field
       */
})