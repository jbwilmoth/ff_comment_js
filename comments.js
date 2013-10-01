// Shorthand for document ready
$(function(){
    CommentModule.setUp();
});

var CommentModule = {
    setUp : function(){
        this.bindNewButton();
        this.bindCommentForm();
    },

    bindNewButton : function(){
        $('#new_comment_button').click(function(event){
            event.preventDefault();

            $(this).hide();
            $('#comment_area').append(CommentForm.render());
        });
    },

    bindCommentForm : function(){
        $('#comment_area').on('submit', '#new_comment', function(event){
            event.preventDefault();

            var author = $(this).find('input:first-child').val();
            var body = $(this).find('textarea').val();

            var comment = new Comment(author, body);
            comment.save();
            $('#comment_list').append(comment.toHTML());

            $(this).remove();
            $('#new_comment_button').show();
        });
    }
}

function Comment(author, body) {
    this.author = author;
    this.body = body;
}

Comment.prototype.toHTML = function() {
    return  "<li>" +
                this.body +
                "<span class='author'>" + this.author + "</span>" +
            "</li>";
}

Comment.prototype.save = function(){
    // send data to the server
}

var CommentForm = {
    render: function() {
        return "<form id='new_comment' action='#' method='POST'>" +
                    "<label>Author <input type='text' name='author'></label>" +
                    "<label> Comment <textarea name='comment'></textarea></label>" +
                    "<input type='submit'>" +
                "</form>";
    }
}
