

const isb = "0439023521"
function fetch(isbn) {
  $.ajax({
      method: "GET",
      url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn,
      success: function(data) {
        const names = data.items.map(item => item.volumeInfo.title)
        console.log(names)
      },
      error: function(xhr, text, error) {
          console.log("Error: " + text)
      }
  })
}

fetch(9780575087057) 
fetch(9782806269171) 
fetch(1440633908)    
fetch(9781945048470)
fetch(9780307417138)