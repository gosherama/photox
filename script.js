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
// Gallery filter
$('.gallery-list-item').click(function() {
  let value = $(this).attr('data-filter');
  if(value === 'all') {
    $('.filter').show(300);
  } else {
    $('.filter').not('.' + value).hide(300);
    $('.filter').filter('.' + value).show(300);
  }
});
$('.gallery-list-item').click(function() {
  $(this).addClass('active-item').siblings().removeClass('active-item');
});
});

