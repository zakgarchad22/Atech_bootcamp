
  const apiKey = "CA1SY8zmueTnbPj37R" 

  function fetchGif() {
    const apiUrl = `https://api.giphy.com/v1/gifs/search?q=cats&api_key=${apiKey}`

    $.ajax({
      method: "GET",
      url: apiUrl,
      success: function(data) {
        if (data.data.length > 0) 
        {
          const gifEmbedUrl = data.data[0].embed_url
          $("#gifFrame").attr("src", gifEmbedUrl)
        } else {
          console.log("No GIFs found.")
        }
      },
      error: function(xhr, text, error) {
        console.log("Error: " + text)
      }
    })
  }

  fetchGif()

