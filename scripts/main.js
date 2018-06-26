$(document).ready(function(){
  // // Add smooth scrolling to all links in navbar + footer link
  // $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
  //   // Make sure this.hash has a value before overriding default behavior
  //   if (this.hash !== "") {
  //     // Prevent default anchor click behavior
  //     event.preventDefault();

  //     // Store hash
  //     var hash = this.hash;

  //     // Using jQuery's animate() method to add smooth page scroll
  //     // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
  //     $('html, body').animate({
  //       scrollTop: $(hash).offset().top
  //     }, 900, function(){
   
  //       // Add hash (#) to URL when done scrolling (default click behavior)
  //       window.location.hash = hash;
  //     });
  //   } // End if
  // });
  
  //Change myTitle id value to loop through title names and background colors
  changeMyTitle();
  window.setInterval(function() { changeMyTitle() }, 6000);


  // add slide animations to objects when scrolled to
  $(window).scroll(function() {
    $(".slideanim-bot").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass('slide-bot');
        }
        else if(pos > winTop + 700) {
          $(this).removeClass('slide-bot')
        }
        
    });
    $(".slideanim-left").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide-left");
        }
    });
  });
})

var cCount = 0;
var bgColors = "#093145,#829356,#DA621E,#AD2A1A".split(",");
var colors = "#EFD469,#000,#FFF,#000".split(",");
var fonts = "Courier New,Lato,Times New Roman".split(",");
var titles = "Software Developer,Team Player,Enthusiastic Learner,Dungeon Master".split(",");

function changeMyTitle() {
    $("#header").css({ 
      "transition": "background-color 1s ease, color 1s ease",
      "backgroundColor": bgColors[cCount], 
      "color": colors[cCount]
    })
    $("#myTitles").replaceWith( "<h2 class='slide-left-loop' id='myTitles'>" + titles[cCount] + "</h2>" );
    cCount++;
    if (cCount == colors.length) {
        cCount = 0
    }
}
