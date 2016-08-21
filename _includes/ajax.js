

$("#music_link").click(function() {
    $(".wrapper").load("music.html .wrapper > *", function (){
      $('.sc_wrapper:gt(4)').hide().last().after(
        $('<a class="show_more" />').attr('href','#').text('Show more').click(function(){
          var a = this;
          $('.sc_wrapper:not(:visible):lt(5)').fadeIn(function(){
            if ($('.sc_wrapper:not(:visible)').length == 0) $(a).remove();
          }); return false;
        })
      );
    }).hide().fadeIn(1000);
});

$("#style_link").click(function() {
    $(".wrapper").load("index.html .wrapper > *", function (){

      $('.post_panel:gt(2)').hide().last().after(
        $('<a class="show_more" />').attr('href','#').text('Show more').click(function(){
          var a = this;
          $('.post_panel:not(:visible):lt(5)').fadeIn(function(){
            if ($('.post_panel:not(:visible)').length == 0) $(a).remove();
          }); return false;
        })
      );
    }).hide().fadeIn(1000);
});


$("#photo_link").click(function() {
    $(".wrapper").load("photo.html .wrapper > *", function (){
      $('.flickr:gt(3)').hide().last().after(
        $('<a class="show_more" />').attr('href','#').text('Show more').click(function(){
          var a = this;
          $('.flickr:not(:visible):lt(5)').fadeIn(function(){
            if ($('.flickr:not(:visible)').length == 0) $(a).remove();
          }); return false;
        })
      );
    }).hide().fadeIn(1000);
});
