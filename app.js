$(document).ready(function() {
  $('#btmain').bind('click', function() {
    $("html, body").animate({scrollTop: '0'}, 500);
  });

  $('#btmain').on('click', function () {
    $('html').scrollTop('0');
  });
});
