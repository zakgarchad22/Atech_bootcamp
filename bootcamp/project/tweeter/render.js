function Renderer() {
    function renderPosts(posts) {
        $('#posts').empty()
       
        for (let post of posts) {
            let postHtml = '<div class="post" data-id="' 
            + post.id + '">' 
            + post.text 
            + '<button class="delete" data-post-id="' + post.id + '">Delete</button>'
            + '<br>' 
            + '<input type="text" placeholder="add comment..." class="comment-input">'
            + '<button class="submit-comment" data-post-id="' + post.id + '">Add Comment</button>'
            + '</div>'
            
            let commentsHtml = '';
        
        
        for (let comment of post.comments) {
            commentsHtml += '<div class="comments" data-id="' + comment.id + '">' 
            + comment.text 
            + '<button class="delete-comment" data-comment-id="' + comment.id + '" data-post-id="' + post.id + '">X</button>' 
            + '</div>'
            }
            

        $('#posts').append(postHtml + commentsHtml)
        
        }
    }

    


    return {
        renderPosts: renderPosts
    };
}