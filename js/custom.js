/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "320px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

var x;
  $(window).bind('mousewheel', function(event) {
        if (event.originalEvent.wheelDelta >= 0) {
            $(".home-content").addClass("animate").removeClass("animation");
            $(".brand-identity").addClass("brand-anime");
            $(".home-content-tablet").addClass("animate").removeClass("animation"); 
        }
    });

    $(".statement").hover(function () {
     $(this).addClass('selected').siblings().removeClass('selected');
  });

    $(".home").on("click", function(event) {
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
  });