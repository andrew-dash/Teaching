$(document).ready(function () {

    myScrollToFunction("s");
    myStickyFunction();
    myScrollingFunction();
    myParallaxFunction();

    var l = function(passedValue, somethingElse) {

      // console.log(passedValue);
      // console.log(somethingElse);
      if ( passedValue < 5) {
        return(true);
      }
      if ( somethingElse < 10 ) {
        return("this is a small number");
      } else {
        return("nope");
      }

    };

    // $('div').append("string of text");
    // $("header").css('content', "some content here");

    // l("thing 1", "hi");
    // l("thing 2", 2);
    // l("thing 3", true);

    // console.log( l(6, 10) );


    // console.log(numImages);
    // var numImages = myImages.length;

    // for(var index = 0; index < numImages; index++ ) {
    //   console.log("using the classic for loop");
    //   console.log(index);
    // }
    var offset = 20; // set a base offset to be used for padding images
    var myImages = $(".img-responsive"); // create an image for all the images on the page
    $.each( myImages, function( i ) {
      // get the height of every image
      console.log("image " + i + " height: " + myImages[i].height);
      var bigDiff = 0; // set initial biggest difference = 0
          // loop through every image in the myImages object
          $.each( myImages, function( i2 ) {
            // get the difference between the current image and all the other images
            var diff = myImages[i].height - myImages[i2].height;
            console.log("the height difference is " + diff + " between this and image: " + i2);
            // if the current difference is larger than the last biggest difference
            if ( diff < bigDiff) {
              // set the biggest difference = to the current largest difference
              bigDiff = diff;
            }
            console.log("the biggest difference is: " + bigDiff);
          }); // end of nested .each function

      bigDiff *= -1; // multiply the bigDiff by -1 to convert to a positive value
      bigDiff += offset; // add the standard 20px offset

      // pad each image using it's difference from the DOM's tallest image
      $(myImages[i]).css('padding-bottom', bigDiff);
    });
    //
    // var diff1 = myImages[1].height - myImages[0].height;
    // var offset1 = offset + diff1;
    // $(myImages[0]).css('padding-bottom', offset1);
    //
    // var diff2 = myImages[1].height - myImages[2].height;
    // var offset2 = offset + diff2;
    // $(myImages[2]).css('padding-bottom', offset2);
    //
    // $(".img-responsive:eq(0)").height();
    // $(".img-responsive:eq(1)").height();












});
