function Tweeter() {
  //An array of posts - this should be private. Use the dummy data below to get started
  let posts =[
    {
        text: "First post!",
        id: "p1",
        comments: [
            { id: "c1", text: "First comment on first post!" },
            { id: "c2", text: "Second comment on first post!!" },
            { id: "c3", text: "Third comment on first post!!!" }
        ]
    },
    {
        text: "Aw man, I wanted to be first",
        id: "p2",
        comments: [
            { id: "c4", text: "Don't wory second poster, you'll be first one day." },
            { id: "c5", text: "Yeah, believe in yourself!" },
            { id: "c6", text: "Haha second place what a joke." }
        ]
    }
]

  //A variable postIdCounter to count the number of total posts
  let postIdCounter = posts.length
  //A variable commentIdCounter to count the number of total comments
  let commentIdCounter = 0
  for (let i = 0; i < posts.length; i++) 
  {
      commentIdCounter += posts[i].comments.length
  }
  //A getPosts function that returns the posts array
  function getPosts() {
      return posts
  }
  //An addPost function that receives some text and adds a post object to posts
  function addPost(text)
  {
    
      const newPost = 
      {
          text: text,
          id: "p"+ (++postIdCounter),
          comments: []
      }
      posts.push(newPost)
  }

  function removePost(postID) 
  {
      for (let i = 0; i < posts.length; i++) 
      {
          if (posts[i].id === postID) {
              posts.splice(i, 1)
              break
          }
      }
  }

//An addComment function that receives a postID and text. It should push an object to the relevant post’s comments array
  function addComment(text, postID)
  {
      for (let i = 0; i < posts.length; i++) 
      {
          if (posts[i].id === postID) 
          {
              const newComment = 
              {
                  id: "c" + commentIdCounter++,
                  text: text
              };
              posts[i].comments.push(newComment)
              break
          }
      }
  }
//A removeComment function that receives a postID and a commentID - you understand what it should do
  function removeComment(postID, commentID) 
  {
      for (let i = 0; i < posts.length; i++) 
      {
          if (posts[i].id === postID) 
          {
              const comments = posts[i].comments
              for (let j = 0; j < comments.length; j++) 
              {
                if (comments[j].id === commentID) 
                {
                  comments.splice(j, 1)
                  break
                }
              }
              break
          }
      }
  }

  return {
      getPosts: getPosts,
      addPost: addPost,
      removePost: removePost,
      addComment: addComment,
      removeComment: removeComment
  };
}

$("#post").on("click", function() {
    var name = $("#name").val()
    var birthday = $("#birthday").val()
    $("#items").append("<div class='item'>" + name + birthday + "</div>")
  });
  
  $("#items").on("click", ".item", function() {
    $(this).remove()
  });

