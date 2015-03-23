// declare a new var with the name that you'll use to call it's functions
// enclosed in the var are a set of functions that can be either called independently or fire in succession

// var myScrollToFunction = function(){
//   // stuff here
// };

var myFirstApp = {
  // Application Constructor
  iWantToInitialize: function() {
      // declare initial actions / declarations
      this.bindEvents();
      // console.log("children!");
  },
  // Bind any events that are required on startup.
  bindEvents: function() {
      document.addEventListener('DOMContentLoaded', this.onReady, false);
  },
  // executable function
  onReady: function() {
      console.log("I'm ready");
  }
};
