

const urllib = require('urllib')
urllib.request('http://www.omdbapi.com/?apikey=fad753da', function(err, response){
    console.log(response.toString())
})
