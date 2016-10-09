


$(document).ready(function() {

  $('.sc_wrapper:gt(4)').hide().last().after(
          $('<a class="show_more" />').attr('href','#').text('Show more').click(function(){
            var a = this;
            $('.sc_wrapper:not(:visible):lt(5)').fadeIn(function(){
              if ($('.sc_wrapper:not(:visible)').length == 0) $(a).remove();
            }); return false;
          })
        );
  var setCurrentPage = function(url) {
    if(window.location.href.indexOf("/photo.html") > -1) {
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
    }
    else if(window.location.href.indexOf("/index.html") > -1) {
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
    }
    else if(window.location.href.indexOf("/music.html") > -1) {
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
    }
      $("#nav_list a[href='" + url + "']").fadeTo(200, 0.3);
  };

  $('#nav_list a').click(function(e){
      e.preventDefault();
      var targetUrl = $(this).attr('href'),
          targetTitle = $(this).attr('title');


      $("#nav_list a[href='" + window.location.pathname + "']").fadeTo(500, 1.0);

      window.history.pushState({url: "" + targetUrl + ""}, targetTitle, targetUrl);
      setCurrentPage(targetUrl);

  });

  window.onpopstate = function(e) {
      $("#nav_list a").fadeTo('fast', 1.0);
      setCurrentPage(e.state ? e.state.url : null);
  };
  // $("#music_link").click(function() {
  //
  //     $(".wrapper").load("music.html .wrapper > *", function (){
  //       $('.sc_wrapper:gt(4)').hide().last().after(
  //         $('<a class="show_more" />').attr('href','#').text('Show more').click(function(){
  //           var a = this;
  //           $('.sc_wrapper:not(:visible):lt(5)').fadeIn(function(){
  //             if ($('.sc_wrapper:not(:visible)').length == 0) $(a).remove();
  //           }); return false;
  //         })
  //       );
  //     }).hide().fadeIn(1000);
  // });
  //
  // $("#style_link").click(function() {
  //
  //     $(".wrapper").load("index.html .wrapper > *", function (){
  //       $('.post_panel:gt(2)').hide().last().after(
  //         $('<a class="show_more" id="style_a_link" />').attr('href','#').text('Show more').click(function(){
  //           var a = this;
  //           $('.post_panel:not(:visible):lt(5)').fadeIn(function(){
  //             if ($('.post_panel:not(:visible)').length == 0) $(a).remove();
  //           }); return false;
  //         })
  //       );
  //
  //     }).hide().fadeIn(1000);
  // });
  // $('.post_panel:gt(2)').hide().last().after(
  //   $('<a class="show_more" id="style_a_link" />').attr('href','#').text('Show more').click(function(){
  //     var a = this;
  //     $('.post_panel:not(:visible):lt(5)').fadeIn(function(){
  //       if ($('.post_panel:not(:visible)').length == 0) $(a).remove();
  //     }); return false;
  //   })
  // );
  //
  //
  // $("#photo_link").click(function() {
  //
  //     $(".wrapper").load("photo.html .wrapper > *", function (){
  //       $('.flickr:gt(3)').hide().last().after(
  //         $('<a class="show_more" />').attr('href','#').text('Show more').click(function(){
  //           var a = this;
  //           $('.flickr:not(:visible):lt(5)').fadeIn(function(){
  //             if ($('.flickr:not(:visible)').length == 0) $(a).remove();
  //           }); return false;
  //         })
  //       );
  //     }).hide().fadeIn(1000);
  // });
  //

});
