


$(document).ready(function() {
  $(".flickr_wrapper iframe").each(function(index) {
        var ratio = $(this).height() / $(this).width();
        var origHeight = $(this).height();
        var origWidth  = $(this).width();
        var self = this;
        // bind to window with closure that references the
        // iframe since the iframe doesn't get resize events
        // until (you know) we resize it.
        $(window).resize(function() {
            if($(self).parent().width() > origWidth) {
                $(self).width(origWidth);
                $(self).height(origHeight);
            } else {
                $(self).width($(self).parent().width());
                $(self).height($(self).parent().width() * ratio);
            }
        });
    });
    $(window).resize();
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
  // function isScrolledIntoView(elem){
  //   var docViewTop = $(window).scrollTop();
  //   var docViewBottom = docViewTop + $(window).height();
  //   var elemTop = $(elem).offset().top;
  //   console.log(elem);
  //   console.log(elemTop);
  //   console.log(docViewTop);
  //   jek
  //   var elemBottom = elemTop + $(elem).height();
  //   console.log((((elemBottom <= docViewBottom) && (elemTop >= docViewTop))));
  //   return (((elemBottom <= docViewBottom) && (elemTop >= docViewTop)));
  // }
  // $( window ).scroll(function() {
  //   {% for post in site.categories.music %}
  //
  //     var isViewable = function(){
  //         if((isScrolledIntoView('#{{ post.track }}')) == true)
  //           if($('#{{ post.track }}').is(':empty')){
  //             document.getElementById('{{ post.track }}').innerHTML= '{{ post.link }}';
  //           }
  //     }
  //
  //     isViewable();
  //
  //   {% endfor %}
  // })
  // {% for post in site.categories.music %}
  //
  //   var isViewable = function(){
  //       if((isScrolledIntoView('#{{ post.track }}')) == true)
  //         if($('#{{ post.track }}').is(':empty')){
  //           document.getElementById('{{ post.track }}').innerHTML= '{{ post.link }}';
  //         }
  //   }
  //
  //   isViewable();
  //
  // {% endfor %}
});
