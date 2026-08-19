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

    //inject the data to the corresponding elements for movie info
    movieTitle.text(data.Title);
    movieYear.text(data.Year);
    movieActors.text(data.Actors);
    movieDirector.text(data.Director);
    moviePlot.text(data.Plot);                  
    })
}

searchResponse()
