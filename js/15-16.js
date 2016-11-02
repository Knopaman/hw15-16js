$(function(){

    function search(){
        var txt = $("#search").val();
        console.log(txt);
        $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?tags="+txt+"&tagmode=any&format=json&jsoncallback=?",
            function(data){
                console.log(data);
                $.each(data.items, function(i,item){
                    var div =$("<div/>").appendTo("#result");
                    $("<img/>").attr("src", item.media.m).appendTo(div);
                    if ( i == 10 ) return false;
                });
            });
    }

$("#btn").click(function(){
    search()
        });



$("#search").keypress(function(e){
    if(e.keyCode == 13){
        search()
    }
});

});
