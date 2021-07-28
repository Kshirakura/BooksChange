$(function() {
  $('.signup-show').click(function() {
    $('#signup-modal').fadeIn();
  });

  $('.login-show').click(function() {
    $('#login-modal').fadeIn();
    // $('#login-modal #submit-btn').css('background', '#102542');
  });

  $('.menu-show').click(function() {
    $('#menu-modal').animate({
      left: 0
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
      left: -300
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

  

});