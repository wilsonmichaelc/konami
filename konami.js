(function(window){
  'use strict'
  function defineKonami() {
    var Konami = {};
    var k = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // The default konami sequence
    Konami = function (konami) {
      if(arguments.length == 0){
        konami = k;
      }
      var count = 0;
      document.addEventListener('keydown', function(e) {
        if(e.keyCode == konami[count]){
          count++;
          if(count == konami.length){
            console.log('Konami!!!!');
          }
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
