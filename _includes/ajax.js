


$(document).ready(function() {

  $(".post_link").click(function() {
    window.history.pushState({state:'new'},'', $(this).attr('href'));

      $(".blog_panel").load("post.html .blog_panel > *", function (){
      }).hide().fadeIn(1000);
  });

  $("#music_link").click(function() {
      window.history.pushState({state:'new'},'', $(this).attr('href'));

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
    window.history.pushState({state:'new'},'', $(this).attr('href'));

      $(".wrapper").load("index.html .wrapper > *", function (){
        $('.post_panel:gt(2)').hide().last().after(
          $('<a class="show_more" id="style_a_link" />').attr('href','#').text('Show more').click(function(){
            var a = this;
            $('.post_panel:not(:visible):lt(5)').fadeIn(function(){
              if ($('.post_panel:not(:visible)').length == 0) $(a).remove();
            }); return false;
          })
        );

      }).hide().fadeIn(1000);
  });
  $('.post_panel:gt(2)').hide().last().after(
    $('<a class="show_more" id="style_a_link" />').attr('href','#').text('Show more').click(function(){
      var a = this;
      $('.post_panel:not(:visible):lt(5)').fadeIn(function(){
        if ($('.post_panel:not(:visible)').length == 0) $(a).remove();
      }); return false;
    })
  );


  $("#photo_link").click(function() {
    window.history.pushState({state:'new'},'', $(this).attr('href'));

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


});
