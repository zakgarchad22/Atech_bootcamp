const posts = [
    {id: 1, text: "Love this product"},
    {id: 2, text: "This is the worst. DON'T BUY!"},
    {id: 3, text: "So glad I found this. Bought four already!"}
  ]
  let index 
  for(let i = 0; i < posts.length; i++){

    console.log(posts[i])
    if(posts[i].text == "This is the worst. DON'T BUY!")
    {
        index = i;
    }
    
  }
  posts.splice(index,1);
  console.log(posts)