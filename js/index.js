// full page slider

$(function() {
    
    $('#fullpage').fullpage({
        autoScrolling: false,
        fitToSection: false,
        
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
