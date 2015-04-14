
var myScrollToFunction = function(){
  // -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
  // Scroll-to Functions
  // -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
  $('.btn-primary').on('click', function(e){
    e.preventDefault();
    $(".col-md-4:first-of-type").ScrollTo({
        duration: 1000,
        offsetTop: 30,
        callback: function(){ // run a callback function when the animation finishes
          $(".navbar").addClass("animated fadeOutUp");
          $("#footer").addClass("animated shake");
        }
    });
  });
};

var myParallaxFunction = function() {
// -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
// Parallax
// -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
$('.jumbotron').parallax({
  imageSrc: 'media/screen.png',
  speed: -0.5
  });
};

var myStickyFunction = function() {
  // -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
  // Sticky elements
  // -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

  $("h1").sticky({topSpacing:30});
};

var myScrollingFunction = function() {
  // -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
  // Window Scroll Actions
  // -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
  $(window).scroll(function () {
    // detect when the window is being scrolled
    console.log($(this).scrollTop());
    if ( $(this).scrollTop() < 70) {
      $(".navbar").removeClass("fadeOutUp");
      $(".navbar").addClass("fadeInUp");
    }
    // if ( $(this).scrollTop() >70) {
    //   // myParallaxFunction();
    // }
    if ( $(this).scrollTop() > 260) {
      $(".navbar").addClass("animated fadeOutUp");
      $(".navbar").removeClass("fadeInUp");
    }

  });

};
