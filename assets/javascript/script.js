
/*Load the user store object from the local storage*/
const users = JSON.parse(localStorage.getItem("users")) || [];//Get the users object from the local storage
const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

$(".movie-info").hide();//Hide the movie-info element from view
$(".post-comment").hide()//Hide the display of the movie comments button
$(".movie-comments").hide()//Hide the display of the movie comments section by default

document.getElementById("user-search").addEventListener("submit", function(event) {
    let searchInput = event.target.searchInput.value;//get value from user input
    let searchQuery = searchInput; 

    const options = {
        method: 'GET',
        headers: {accept: 'application/json', Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMWU0MjUyN2NlYTEwZjZkMmIyZjc5YzdkZDliNWU3MSIsIm5iZiI6MTc4NzI1MDQzMi41MjE5OTk4LCJzdWIiOiI2YTg3NDcwMGEyYmI0NWZjZTVkZmFmNTYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Ux6TU9ZcnY24Tige53uoG8PRodfROzF9FOWYJVmW3r4'} //... here refers to the read access token given to TMDB user
    };

    let movieId;
    let apiUrl = `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`;//retrieves the movie data

    event.preventDefault()//Prevent the default behaviour of the form
    /*Fetch response from api and append the append the resulting data to elements*/
    fetch(apiUrl, options)
    .then(res => res.json())
    .then(data =>  {
        
            console.log(users)

            //Filter out the api response data to return only the object correponding to the search query
             data.results.filter(//Filter the data response from the api directly and return the result that matches with search query 
                movie => {
    
                    let originalTitle = movie.original_title.toLowerCase();
                    const langIsEnglish = movie.original_language === "en";
                    const searchQueryLowerCased = searchQuery.toLowerCase();

                    const searchedMovie = {//Set values of object keys to returned movie search data for quick reference across the codebase
                        searchedMovieTitle: undefined,
                        searchedMovieYear: undefined,
                        searchedMovieActors: undefined,
                        searchedMovieDirector: undefined,
                        searchedMoviePlot: undefined,
                        searchedMoviePoster: undefined
                    }
                    /*
                    Original_title from api response contains a : after the first part of the title. This makes the search 
                    query string to not match with the original_title property of the api response object. The character
                    in the string will be removed to create a match and return the object corresponding to the search query.
                    */
                    if(originalTitle.includes(":")) {//Look for character in string and replace it to match string with search query
                            originalTitle = movie.original_title.toLowerCase().replace(":", "" )
                        }
                
                    if(originalTitle === searchQueryLowerCased && langIsEnglish) {
                        /*console.log("found match: ", originalTitle, movie)*/
                        movie.original_title.toLowerCase() === searchQueryLowerCased//Transform to lowercase to perform strict matching
                         //Get the elements to represent the returned movie information
                        let movieTitle = $("#movie-title");
                        let movieYear = $(".movie-year");
                        let movieActors = $(".movie-actors");
                        let movieDirector = $(".movie-director");
                        let moviePlot = $("#movie-plot");
                    
                        console.log(searchInput)
                        
                        //Set value of searchedMovieTitle in searchedMovie object
                        searchedMovie.searchedMovieTitle = movie.original_title

                        //Create and append label, along with the data to the corresponding elements for movie info
                        movieTitle.html(`<label class=movie-info-label>Movie: </label> ${searchedMovie.searchedMovieTitle}`);//Movie title
                        
                        //Set value of searchedMovieYear in searchedMovie object
                        searchedMovie.searchedMovieYear= movie.release_date

                        //Create and append label, along with the data to the corresponding elements for movie release year
                        movieYear.html(`<label class=movie-info-label>Year: </label> ${searchedMovie.searchedMovieYear}`);//Movie release year

                        /*TMDB api does not allow appending query parameters to the api query string with append_to_response. Therefore, a seperate api call
                        to the credits endpoint has to be made to retrieve movie credits*/ 
                        //Fetch movie credits from the TMDB credits endpoint
                        fetch(`https://api.themoviedb.org/3/movie/${movie.id}/credits`, options)
                        .then(res => res.json())
                        .then(credits => {
                            /*Loop through and return movie cast. Break off loop at the fifth iteration to show the first 4 actors as main actors.*/
                            for(let i = 0; i < credits.cast.length; i ++) {
                                console.log("actor", credits.cast[i].original_name, )
                                let actors = credits.cast.slice(0, 4);//Slice the cast array to return the first 4 actors as main actors

                                    //Set value of searchedMovieActors in searchedMovie object to returned actors from TMDB credits api for later reference
                                    searchedMovie.searchedMovieActors = [actors[0].name, actors[1].name, actors[2].name, actors[3].name]//Set value of key to actors list
                                    //Show movie actors on the actors label element
                                    movieActors.html(`<label class=movie-info-label>Actors: </label> ${actors[0].name}, ${actors[1].name}, ${actors[2].name},
                                    ${actors[3].name}`);

                                    //Set value of searchedMovieDirector in searchedMovie object to returned data from credits api for later reference
                                    searchedMovie.searchedMovieDirector = credits.crew[1].name;
                                    //Show movie director on the director label element
                                    movieDirector.html(`<label class=movie-info-label>Director: </label> ${credits.crew[1].name}`);
                                    console.log(credits.crew)
                                if(i < 4) {
                                    continue
                                }
                                else {
                                    break
                                }
                            }
                            
                        })

                        //Set value of searchedMoviePlot in searchedMovie object to returned movie plot from TMDB api for later reference
                        searchedMovie.searchedMoviePlot = movie.overview;
                        //Show movie plot
                        moviePlot.html(`<label class=movie-info-label>Plot: </label> ${movie.overview}`); 
                        //Set img attribute to display movie poster
                        const posterUrlBase = "https://image.tmdb.org/t/p/w500/";
                        const posterAttribute = `src, ${posterUrlBase + movie.poster_path}`;//set the src attribute to the poster url and the path from api
                        $(".movie-poster").attr(posterAttribute);//set the poster image for the movie
                        //Set searchedMoviePoster in searchedMovie object to movie poster url appended with the poster path from TMDB api
                        searchedMovie.searchedMoviePoster = $(".movie-poster").attr(posterAttribute)
                        //show for which movie the poster is for
                        $("movie-poster").attr("alt", `Poster image for the movie ${movie.original_title}`)

                        
                        $(".post-comment").show()//Show post comment button with search results

                        /*Show the form to write and post the comment, provided that the user came to this page following the log in procedure*/
                        console.log("users:", users)
                        
                        $(".movie-comments").show()//Show the movie comments div

                        /*Get the movie comments div from the DOM and assign to variable*/
                        const movieComments = $(".movie-comments");

                        /*Create a section and append the comments loaded from the local storage to the section*/
                        let commentsSection = $(document.createElement("section"));//Create the section element for the comments
                        commentsSection.addClass("user-comments");//Add the classname to the section for styling

                        /*Create elements to display the username and comment posted by the user*/
                        let commentText = $(document.createElement("p"));//Create the paragraph for the comment text 
                        commentText.addClass("comment-text")

                        /*Return the date in mm.dd.yyyy format from the date object*/
                        const presentDate = new Date()//Get the current date in milliseconds from the Javascript Date object
                        const dateAsLocaleString = presentDate.toLocaleDateString();//Return the current date as a locale string from the elasped milliseconds
                        /*Join an <em> element with the logged in user and the comment to create a comment body*/
                        commentText.append(`<em>${loggedInUser.username},</em> on ${dateAsLocaleString} said: <br> ${loggedInUser.comments}`);//Append the comment from the user to the end of the paragraph

                        /*Append the elements to display the comments as children of the comments section*/
                        commentsSection.append(commentText);

                        /*Append the created comments section as a child of the movie comments div*/
                        movieComments.append(commentsSection);
                    }

                    else {
                        $("movie-info").text("The movie you searched for was not found. Please make sure that the movie title has been typed properly.")
                        $(".movie-info").show()//show the .movie-info div with the search results
                    }
            });
        
    })
    .catch(err => console.error(err));

    //reset the input field           
    event.target.searchInput.value = ""
       
})