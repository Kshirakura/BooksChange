$(function() {
  $('.signup-show').click(function() {
    $('#signup-modal').fadeIn();
  });

  $('.login-show').click(function() {
    $('#login-modal').fadeIn();
    // $('#login-modal #submit-btn').css('background', '#102542');
  });

  $('.close-btn').click(function() {
    $('#signup-modal').fadeOut();
    $('#login-modal').fadeOut();
  });
});