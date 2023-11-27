function Renderer() {

    function renderPosts(posts) {
        $('#posts').empty()


        for (let post of posts) {
            let postHtml = '<div class="post" data-id="' + post.id + '">' + post.text + '</div>'
            
            let commentsHtml = '<div class="comments">'

            for (let comment of post.comments) {

                commentsHtml += '<div class="comment" data-id="' + comment.id + '">' + comment.text + '</div>'
            }

            commentsHtml += '</div>'
            $('#posts').append(postHtml + commentsHtml)
        }

        
    }


    return {renderPosts: renderPosts}
    
        
    

}
