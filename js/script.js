const search = "forrest gump"
const apiUrl = `https://www.omdbapi.com/?apikey=24358589&t=${search}`;
const response = fetch(apiUrl).then((data) => {data})

console.log(response)
