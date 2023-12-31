
  const apiKey = "Q94zsvRa28GBpAJ0ME08DW7sP9RvMgGKuOZkFDAsREtQDy20G90f9MDe" 
  let save = ""
  function fetchGif() {

    
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=cPQzhdeZjoZy77ocaK7BGhe4tIYDuaDZ&q=beef&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips`


    return new Promise((resolve, reject) => {
      $.ajax({
        method: "GET",
        url: apiUrl,
        success: function(data) {
  
    
         resolve(data)
        }  
  })
})
  
}
const zak = ""
  fetchGif()
  .then((gifUrl) => {
    zak = gifUrl.data
  })

  console.log(zak);
 
  
  // $('.spawn-button').on("click", function(event) {
  //   event.preventDefault();
  
  //   $.ajax({
  //     url: query + $(this).html() + APIKey + limit,
  //     method: 'GET',
  //     success: function(response) { 
  //     for(var i = 0; i < response.data.length; i++){
  //       // console.log(response.data[i]);
  //       // console.log(response.data[i].images.original);
  //       $('.gif-container').append("<img src=" + response.data[i].images.fixed_height.url + ">");
  //     }
  //   }
  // })
  
  // });


