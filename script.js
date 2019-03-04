// toggler effect
$(document).ready(function() {
  $('.nav-button').click(function() {
    $('.nav-button').toggleClass('change');
  });

// Navbar scrolldown
$(window).scroll(function() {
  let position = $(this).scrollTop();
  if (position >= 200) {
    $('.nav-menu').addClass('custom-navbar');
  } else {
    $('.nav-menu').removeClass('custom-navbar');
  }
  });
// Mission effect (slide right and left)
$(window).scroll(function() {
  let position = $(this).scrollTop();
  if(position >= 650) {
    $('.camera-img').addClass('fromLeft');
    $('.mission-text').addClass('fromRight');
  } else {
    $('.camera-img').removeClass('fromLeft');
    $('.mission-text').removelass('fromRight');
    }
  });
});

