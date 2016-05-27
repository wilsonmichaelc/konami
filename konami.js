(function(window){
  'use strict'
  function defineKonami() {
    var Konami = {};
    var k = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];             // The default sequence: up, up, down, down, left, right, left, right, b, a
    var f = function(){console.log("Konami!"); alert("Konami!");}  // The default function: log and alert "Konami!"
    Konami = function (konami, func) {
      // Check if the first argument is not an object or not defined
      if(typeof(konami) != 'object' || typeof(konami) === 'undefined' || konami === ''){
        konami = k; // Use the default sequence
      }
      // Check to see if the second argument is a function
      if(typeof(func) != 'function'){
        func = f; // Use the default function
      }
      var count = 0; // Counter to check for end of sequence
      document.addEventListener('keydown', function(e) {
        // If the key press matches the sequence array of the same position then we start counting
        if(e.keyCode == konami[count]){
          count++;
          // If we reach the end of the count without resetting it, the sequenc matched so execute the function
          if(count == konami.length){
            func();
          }
        // Sequence was interrupted, reset the count
        }else{
          count = 0;
        }
      });
    };
    return Konami;
  }
  if(typeof(Konami) === 'undefined') {
    window.Konami = defineKonami();
  }
})(window);
