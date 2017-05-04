$(document).ready(function () {
    $('button').click(function () {
        var id = $(this).prev().attr("id");
        
        $.ajax({
            type: 'GET',
            dataType: 'Json',
            url: '/Account/Upvote/' + id,
            success: function (result) {
                console.log(result);
                var score = result.Score;

                $("'"+"#" + result.DestinationId + "'").text(score);
            },
            beforeSend: function (jqXHR, settings) {
                console.log(settings.url);
            }
        });
    });
    $('.downvote').click(function () {
        $.ajax({
            type: 'GET',
            url: '/Home/Downvote',
            success: function (result) {
                $('.score').html(result);
            }
        });
    });
});