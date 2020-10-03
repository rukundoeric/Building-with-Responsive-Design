$(document).ready(() => {
  $(window).scroll(() => {
    const windowTop = $(window).scrollTop() + 1;
    const windowWidth = $(window).width();
    if(windowWidth > 800) {
      if (windowTop > 50) {
        $("#nav_bar_menu").addClass("fixed");
        $("#ntw_logo").css("display", "flex");
        $("#nav_bar_sub_links").css("display", "none");
      } else {
        $("#nav_bar_menu").removeClass("fixed");
        $("#ntw_logo").css("display", "none");
        $("#nav_bar_sub_links").css("display", "flex");
      }
    } else if (windowWidth < 764) {
       $("#ntw_logo").css("display", "flex");
       if (windowTop > 50) {
         $("#nav_bar_menu").addClass("fixed");
         $("#nav_bar_sub_links").css("display", "none");
       } else {
         $("#nav_bar_menu").removeClass("fixed");
         $("#nav_bar_sub_links").css("display", "none");
       }
    }
  });
  $("#open-menu-btn").on("click", () => {
    if ($("#sm-screen-menu-dir").hasClass("close_menu")) {
      $("#sm-screen-menu-dir").removeClass("close_menu");
    }
    $("#sm-screen-menu-dir").addClass("open_menu");
  });
  $("#close-menu-btn").on("click", () => {
    if ($("#sm-screen-menu-dir").hasClass("open_menu")) {
      $("#sm-screen-menu-dir").removeClass("open_menu");
    }
    $("#sm-screen-menu-dir").addClass("close_menu");
  });
});
