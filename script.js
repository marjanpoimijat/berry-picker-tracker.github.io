(function ($) {
  $(window).on("load hashchange", function () {
    // First hide all content regions
    $(".content-region").hide();

    // Remove active classes on the main-menu if any
    $(".main-menu a").removeClass("active");
    var region =
      location.hash.toString() || $(".main-menu a:first").attr("href");

    // Show region specified in URL hash
    $(region).show();

    $('.main-menu a[href="' + region + '"]').addClass("active");
  });
})(jQuery);
Footer;
