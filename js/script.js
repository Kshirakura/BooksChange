$(function() {

  // ie判定
  var userAgent = window.navigator.userAgent.toLowerCase();
  if(userAgent.indexOf('msie') != -1 ||
        userAgent.indexOf('trident') != -1) {
          $('.twitter-share-button').hide();
        }
  
  $('.signup-show').click(function() {
    $('#signup-modal').fadeIn();
  });

  $('.login-show').click(function() {
    $('#login-modal').fadeIn();
    // $('#login-modal #submit-btn').css('background', '#102542');
  });

  $('.menu-show').click(function() {
    $('#menu-modal').animate({
      right: 0
  },300);
  });

  $('.go-top').click(function() {
    $('html, body').animate({
      scrollTop:0
    }, 300);
  });

  $('.scroll-btn').click(function() {
    var id = $(this).attr('href');
    var position =$(id).offset().top;
    $('html, body').animate({
      scrollTop:position
    }, 300);
  });

  $('.close-btn').click(function() {
    $('#signup-modal').fadeOut();
    $('#login-modal').fadeOut();
    $('#menu-modal').animate({
      right: -300
  },300);
  });

  $('.site-title').hover(function() {
    $(this).animate({
      opacity : 0.8
  },100);
  },
  function() {
    $(this).animate({
      opacity : 1.0
  },100);
  }
  );

  var pagetop = $('#page-top');
  pagetop.hide();
  $(window).scroll(function () {
     if ($(this).scrollTop() > 100) {
          pagetop.fadeIn();
     } else {
          pagetop.fadeOut();
     }
  });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 500);
     return false;
  });

});