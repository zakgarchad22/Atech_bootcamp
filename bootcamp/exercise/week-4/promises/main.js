

  function getData() {  
      const data =  $.get('https://random-word-api.herokuapp.com/word')
      return data 
  }

  getData().then(title => {
    console.log(title)
       return $.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${title[0]}`)
  }
  ).then(function (word){
    
    word ?  renderWisdoms(word.items[0].volumeInfo.title , word.items[0].volumeInfo.imageLinks.thumbnail) : console.error("not find");
  })

  const renderWisdoms = function (title , img) {

    const source = $("#wisdom-template").html()
    const templete = Handlebars.compile(source)
    const newHTML = templete({title , img})
    $("#results").html(newHTML)


    localStorage.setItem('dataThatIsImportant', JSON.stringify(wisdoms));
    
}


