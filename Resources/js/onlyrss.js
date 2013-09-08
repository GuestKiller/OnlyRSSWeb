$(document).ready(function(){
    $(window).resize(setHeightAndWidth);
    setHeightAndWidth();
    $.ajax({
        url: '/get_all_feed_list'
    }).done(function (data){
            arrObj = JSON.parse(data);
            for (var i = 0; i < arrObj.length; i++){
                $('#feed_list ul').append('<li class="feed" onclick=\"getFeedByUrl(\''
                    + arrObj[i].fields.feed_url + '\', ' + arrObj[i].pk + ', this)\">'
                    + '<div class="feed_item">'
                    + arrObj[i].fields.title + '</div></li>')
            }
        });
});