// Shorthand for document ready
$(function(){
    $('#new_comment_button').click(function(event){
        event.preventDefault();

        var form = "<form id='new_comment' action='#' method='POST'>" +
                        "<label>Author <input type='text' name='author'></label>" +
                        "<label> Comment <textarea name='comment'></textarea></label>" +
                        "<input type='submit'>" +
                    "</form>"
        $(this).hide();
        $('#comment_area').append(form);
    });

    $('#comment_area').on('submit', '#new_comment', function(event){
        event.preventDefault();

        var author = $(this).find('input:first-child').val();
        var comment = $(this).find('textarea').val();

        var li = "<li>" +
                    comment +
                    "<span class='author'>" + author + "</span>" +
                 "</li>";

        $('#comment_list').append(li);
        $(this).remove();
        $('#new_comment_button').show();
    });
});

