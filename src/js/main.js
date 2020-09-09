//Dropdowns
$(document).ready(function(){
  $('.dropdown').each(function(e){
    $(this).find('.dropdown-toggle').click(function(){
      $(this).parent().toggleClass('open');
      $(this).closest('.dropdown').siblings().removeClass('open');
    });
  });
});

jQuery(function($){
  $(document).mouseup(function (e){
      var dropdown = $(".dropdown");
      if (!dropdown.is(e.target) && dropdown.has(e.target).length === 0) {
        dropdown.removeClass('open');
      }
  });
});

// Fixed header
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
    document.getElementById("navbar").className = ('new-blog-nav navbar-bg');
  } else {
    document.getElementById("navbar").className = ('new-blog-nav');
  }
}
