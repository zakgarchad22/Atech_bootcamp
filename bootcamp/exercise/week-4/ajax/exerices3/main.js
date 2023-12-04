function fetch(queryType, queryValue) {
  let url
  if (queryType === "isbn") 
  {
    url = 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + queryValue
  }
   else if (queryType === "title") 
  {
    url = 'https://www.googleapis.com/books/v1/volumes?q=intitle:' + queryValue
  }

  $.ajax({
    method: "GET",
    url: url,
    success: function(data) {
      data.items.forEach(function(item) 
      {
        const title = item.volumeInfo.title
        const authors = item.volumeInfo.authors
        const isbn = item.volumeInfo.industryIdentifiers[0].identifier
        console.log("title: " + title)
        console.log("author: " + authors.join(", "))
        console.log("and ISBN: " + isbn)
      })
    },
    error: function(xhr, text, error) {
      console.log("Error: " + text)
    }
  })
}

fetch("isbn", 9780575087057)
fetch("isbn", 9782806269171)
fetch("isbn", 1440633908)
fetch("isbn", 9781945048470)
fetch("isbn", 9780307417138)

fetch("title", "The Wise Man's Fears")
fetch("title", "How to Win Friends and Influence People")