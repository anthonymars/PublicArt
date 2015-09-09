// full page slider

$(function() {
    $('#fullpage').fullpage({
        autoScrolling: false,
        fitToSection: false
    });
});
  
// navbar change  
$(function(){
$(window).scroll(function() {
    
        // check if window scroll for more than 230px. May vary
        // as per the height of your main banner.
        
    if($(this).scrollTop() > 230) { 
            $('.navbar').addClass('opaque'); // adding the opaque class
    } else {
            $('.navbar').removeClass('opaque'); // removing the opaque class
    }
 });
});  


// main page slideshow
$('.bxslider').bxSlider({
  minSlides: 2,
  maxSlides: 4,
  slideWidth: 250,
  slideMargin: 10
});

// contact form
var form = $('.contact-form');
  form.submit(function () {
    $this = $(this);
    $.post($(this).attr('action'), $('.contact-form').serialize(), function(data) {
      $this.prev().text(data.message).fadeIn().delay(3000).fadeOut();
    },'json');
    return false;
  });

