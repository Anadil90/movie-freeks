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
            console.log(data.results)

            
            //Filter out the api response data to return only the object correponding to the search query
             data.results.filter(//Filter the data response from the api directly and return the result that matches with search query 
                movie => {
                    
                    let originalTitle = movie.original_title.toLowerCase();
                    const langIsEnglish = movie.original_language === "en";
                    const searchQueryLowerCased = searchQuery.toLowerCase();

                    /*
                    original_title from api response contains a : after the first part of the title. This makes the search 
                    query string to not match with the original_title property of the api response object. The character
                    in the string will be removed to create a match and return the object corresponding to the search query.
                    */
                    if(originalTitle.includes(":")) {//look for character in string and replace it to match string with search query
                            originalTitle = movie.original_title.toLowerCase().replace(":", "" )
                        }
                
                    if(originalTitle === searchQueryLowerCased && langIsEnglish) {
                        /*console.log("found match: ", originalTitle, movie)*/
                        movie.original_title.toLowerCase() === searchQueryLowerCased//Transform to lowercase to perform strict matching
                         //get the elements to represent the returned movie information
                let movieTitle = $("#movie-title");
                let movieYear = $(".movie-year");
                let movieActors = $(".movie-actors");
                let movieDirector = $(".movie-director");
                let moviePlot = $("#movie-plot");
                
                console.log(searchInput)
                    //create and append label, along with the data to the corresponding elements for movie info
                    movieTitle.html(`<label class=movie-info-label>Movie: </label> ${movie.original_title}`);
                    movieYear.html(`<label class=movie-info-label>Year: </label> ${movie.release_date}`);
                    movieActors.html(`<label class=movie-info-label>Actors: </label>`);
                    movieDirector.html(`<label class=movie-info-label>Director: </label>`);
                    moviePlot.html(`<label class=movie-info-label>Plot: </label> ${movie.overview}`); 
                    //set img attribute to display movie poster
                    const posterUrlBase = "https://image.tmdb.org/t/p/w500/";
                    $(".movie-poster").attr("src", posterUrlBase + movie.poster_path);//set the poster image for the movie

                    //show for which movie the poster is for
                    $("movie-poster").attr("alt", `Poster image for the movie ${movie.original_title}`)

                    $(".movie-info").css({"visibility": "visible"})//show the .movie-info div with the search results
                    $(".post-comment").css({"visibility": "visible"})//show post comment button with search results
                    $(".movie-comments").css({"visibility": "visible"})//show the movie comments div
                    }
                
                   
                
            });
                /*let matchedMovie = Object.entries(results);
                let searchResults;
                    console.log("matched", matchedMovie.slice(0, 1))*/
            //Loop through the array of duplicate responses from the search query and return only the first result
             

            
        }
    })
    .catch(err => console.error(err));
             
        
    
       event.target.searchInput.value = ""//reset the input field
       
})