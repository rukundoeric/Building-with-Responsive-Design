$(document).ready(() => {
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
