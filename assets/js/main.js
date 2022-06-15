(function($) {
  "use strict"; // Start of use strict
  menuFull();
  
  $("#mask").delay(500).fadeOut("slow");

  /* ------------------------------- */


})(jQuery); // End of use strict

$(window).on("load",function(){
  AOS.init({
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
  });

})
$(".animatedScroll").on("click",function(e){
  e.preventDefault();
  animateScroll($(this).attr("href"))
})

$("#nav ul li a").on("click",function(e){
  $("#nav ul li").removeClass("current")
  $(this).parent().addClass("current")
});

function menuFull() {
    $(".trigger-overlay").length > 0 && ($(".trigger-overlay").click(function() {
        return $(".overlay").hasClass("open") ? ($(".overlay").removeClass("open"), $(this).removeClass("is-active")) : ($(".overlay").addClass("open"), $(this).addClass("is-active")), !1
    }), $(".overlay").find("a").on("click", function(e) {
        $(".overlay").removeClass("open"), $(".dropdown-icon").removeClass("is-active")
    }))
}

function animateScroll(sectionScroll){
  posY=$(sectionScroll).position().top-120;
  $('html, body').animate({scrollTop:posY}, 'slow');
}


