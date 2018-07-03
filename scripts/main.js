$(document).ready(function(){
  
  // Add scrollspy to <body>
  $('body').scrollspy({target: ".navbar", offset: 95});

  // Add smooth scrolling on all links inside the navbar
  $(".navbar a, .navbar-brand a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 90
      }, 800, function() {

      // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash - 90;
      });

    } // End if

  });
  //Change myTitle id value to loop through title names and background colors
  changeMyTitle();
  window.setInterval(function() { changeMyTitle() }, 6000);

  // add animations to objects when scrolled to
  $(window).scroll(function() {
    // fade element from bottom->up
    $(".fade-anim-bot").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
      if (pos < winTop + 650) {
        $(this).addClass('fade-bot');
      }
      else if(pos > winTop + 700) {
        $(this).removeClass('fade-bot')
      } 
    });
    // change position of navbar to fixed on top once past banner section
    $(".navbar").each(function(){
      var winTop = $(window).scrollTop();
      if (winTop > 50) {
        $(this).addClass('fixed-top slide-nav');
        $(".navbar-brand").replaceWith( "<a class='navbar-brand' href='#'>EG</a>");
      }
      else {
        $(this).removeClass('fixed-top slide-nav');
        $(".navbar-brand").replaceWith( "<a class='navbar-brand' href='#''>Edward Guevara</a>");
      } 
    });
    $(".background").each(function() {
      
    });
  });
})

var cCount = 0;
var bgColors = "#093145,#A3B86C,#DA621E,#C02F1D".split(",");
var colors = "#EFD469,#000,#FFF,#000".split(",");
var navTextColor = [true, false, true, false];
var fonts = "Courier New,Lato,Times New Roman".split(",");
var titles = "Software Developer,Web Developer,Enthusiastic Learner,Dungeon Master".split(",");

function changeMyTitle() {
    $("#header").css({ 
      "transition": "background-color 1s ease, color 1s ease",
      "backgroundColor": bgColors[cCount], 
      "color": colors[cCount]
    })
    $(".navbar").css({ 
      "transition": "background-color 1s ease, color 1s ease",
      "backgroundColor": bgColors[cCount], 
      "color": colors[cCount]
    })
    if(navTextColor[cCount]) {
      $(".navbar").addClass('navbar-dark').removeClass('navbar-light');
    }
    else {
      $(".navbar").addClass('navbar-light').removeClass('navbar-dark');
    }

    $("#myTitles").replaceWith( "<h2 class='fade-left-loop' id='myTitles'>" + titles[cCount] + "</h2>" );
    cCount++;
    if (cCount == colors.length) {
        cCount = 0
    }
}
