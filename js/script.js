$(function() {
  s = $(".group-section");
  pos = s.position();
  $(window).scroll(function() {
    scroll = $(window).scrollTop();
    if (scroll >= 500) {
      $("#header").addClass("darkHeader");
      $("body").addClass("headerScroll")
    } else {
      $("#header").removeClass("darkHeader");
      $("body").removeClass("headerScroll")
    }
    // Here You can add your conditions according to your requirments
    if (scroll >= 1500) {
      s.addClass("active");
    } else if (scroll >= 100) {
      s.removeClass("active");
    }
  });



  $("#mobile-expertise-carousel").owlCarousel({
    responsive: {
      0: {
        items: 2
      },
      768: {
        items: 3
      },
      1170: {
        items: 5
      }
    }
  });


  var passes = ['pass1', 'pass2', 'pass3'];
  var index = 0;
  var reel = $('#reel');

  var incrementIndex = function() {
    index++, index > passes.length - 1 && (index = 0);
  }

  var createSlide = function(index) {
    var $div = $("<div>", {
      class: "screenshot " + passes[index]
    });

    reel.append($div);
  };

  var transitionSlides = function(duration, delay) {
    var a = $(".screenshot");
    $("#reel").transition({
      translate: [-287],
      duration: duration,
      delay: delay,
      easing: "easeInOutCubic",
      complete: function() {
        $("#reel").transition({
          translate: [0],
          duration: 0,
          complete: function() {
            $('.screenshot').first().remove();
            initiateSlides(500, 2000);
          }
        });
      }
    });
  }

  var initiateSlides = function(duration, delay) {
    incrementIndex();
    createSlide(index);
    transitionSlides(duration, delay);
  }

  createSlide(index);
  initiateSlides(500, 2000);
});


// var slides = document.querySelectorAll('#slides .slide');
// var currentSlide = 0;
// var slideInterval = setInterval(nextSlide,2000);
//
// function nextSlide(){
//   slides[currentSlide].className = 'slide';
//   currentSlide = (currentSlide+1)%slides.length;
//   slides[currentSlide].className = 'slide slide-change';
// }


$(".scroll-top").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});
