/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "320px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

var x=0;
  $(window).bind('mousewheel', function(event) {
        if(navigator.userAgent.indexOf("Safari") != -1)
        {
          if (event.originalEvent.wheelDelta <= 0) {
              $(".home-content").addClass("animate").removeClass("animation");
              $(".brand-identity").addClass("brand-anime");
              $(".home-content-tablet").addClass("animate").removeClass("animation"); 
          }
        }
        if (event.originalEvent.wheelDelta >= 0) {
            $(".home-content").addClass("animate").removeClass("animation");
            $(".brand-identity").addClass("brand-anime");
            $(".home-content-tablet").addClass("animate").removeClass("animation"); 
        }
    });
  $(window).bind('DOMMouseScroll', function(e) {
      var e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        if (delta <= 0) {
              $(".home-content").addClass("animate").removeClass("animation");
              $(".brand-identity").addClass("brand-anime");
              $(".home-content-tablet").addClass("animate").removeClass("animation"); 
          }
        else {
            $(".home-content").addClass("animate").removeClass("animation");
            $(".brand-identity").addClass("brand-anime");
            $(".home-content-tablet").addClass("animate").removeClass("animation"); 
        }
    });
    $(window).bind('onmousewheel', function(e) {
      var e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        if (delta <= 0) {
              $(".home-content").addClass("animate").removeClass("animation");
              $(".brand-identity").addClass("brand-anime");
              $(".home-content-tablet").addClass("animate").removeClass("animation"); 
          }
        else {
            $(".home-content").addClass("animate").removeClass("animation");
            $(".brand-identity").addClass("brand-anime");
            $(".home-content-tablet").addClass("animate").removeClass("animation"); 
        }
    });
    $(".home").bind("touchstart",function(){
      if ($(window).width() > 450) {
        if (x == '0') {
          $(".home-content").addClass("animate").removeClass("animation");
          $(".brand-identity").addClass("brand-anime");
          $(".home-content-tablet").addClass("animate").removeClass("animation"); 
          x=1;
        }
        else {
          $(".home-content").removeClass("animate");
          $(".brand-identity").removeClass("brand-anime");
          $(".home-content-tablet").removeClass("animate");
          x=0;
        }
      }
    });

    
    
    $(".statement").hover(function () {
     $(this).addClass('selected').siblings().removeClass('selected');
  });

    $(".home").on("click", function(event) {
      if ($(window).width() > 450) {
        if (x == '0') {
          $(".home-content").addClass("animate").removeClass("animation");
          $(".brand-identity").addClass("brand-anime");
          $(".home-content-tablet").addClass("animate").removeClass("animation"); 
          x=1;
      }
      else {
        $(".home-content").removeClass("animate");
          $(".brand-identity").removeClass("brand-anime");
          $(".home-content-tablet").removeClass("animate");
          x=0;
      }
    }
  });
