/*fetch response from api and asign it to a variable*/
search = "pacific rim"
const apiResponse = fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=68dd180a&t=${search}`)
                        .then(response => response.json())
                        .then(data => {
                            
                        })