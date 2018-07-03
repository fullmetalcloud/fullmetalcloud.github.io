$(document).ready(function(){
  
  //Change myTitle id value to loop through title names and background colors
  changeMyTitle();
  window.setInterval(function() { changeMyTitle() }, 6000);

  // add slide animations to objects when scrolled to
  $(window).scroll(function() {
    $(".slideanim-bot").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
      if (pos < winTop + 650) {
        $(this).addClass('slide-bot');
      }
      else if(pos > winTop + 700) {
        $(this).removeClass('slide-bot')
      } 
    });
    $(".navbar").each(function(){
      var pos = $(this).offset().top;
      var winTop = $(window).scrollTop();
      if (winTop > 80) {
        $(this).addClass('fixed-top slidenav-top');
        $(".navbar-brand").replaceWith( "<a class='navbar-brand' href='#''>EG</a>").css({

        });
      }
      else {
        $(this).removeClass('fixed-top slidenav-top');
        $(".navbar-brand").replaceWith( "<a class='navbar-brand' href='#''>Edward Guevara</a>");
      } 
    })
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

    $("#myTitles").replaceWith( "<h2 class='slide-left-loop' id='myTitles'>" + titles[cCount] + "</h2>" );
    cCount++;
    if (cCount == colors.length) {
        cCount = 0
    }
}
