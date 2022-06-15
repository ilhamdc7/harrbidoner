$(window).on("load", function() {
    "use strict";

    $(".grid-gallery").lightGallery(); 
    
    //  ============= MOBILE RESPONSIVE MENU ===============

    $(".menu-btn").on("click", function(){
      $(this).toggleClass("active");
      $(".responsive-mobile-menu").toggleClass("active");
    });

    $(".responsive-mobile-menu ul ul").parent().addClass("menu-item-has-children");
    $(".responsive-mobile-menu ul li.menu-item-has-children > a").on("click", function() {
      $(this).parent().toggleClass("active").siblings().removeClass("active");
      $(this).next("ul").slideToggle();
      $(this).parent().siblings().find("ul").slideUp();
      return false;
    });

    $("html, .menu-btn.active").on("click", function() {
      $(".responsive-mobile-menu").removeClass("active");
      $(".menu-btn").removeClass("active");
    });

    $(".menu-btn, .responsive-mobile-menu").on("click", function(e) {
      e.stopPropagation();
    });

    // STICKY HEADER 

    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 1) {
            $("header").addClass("sticky animated slideInDown");
        } else {
            $("header").removeClass("sticky animated slideInDown");
        }
    });

    $("#mask").fadeOut();


  //   AOS.init({
  //   once: true, // whether animation should happen only once - while scrolling down
  //   mirror: false, // whether elements should animate out while scrolling past them
  // });
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


});


