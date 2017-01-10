

(function($){
  $.fn.rainbowText = function(){

    // ====== Create text variable that retrieve element inner HTML ====== //
    var text = this[0].innerHTML;

    // ====== split test into characters and put them in an array ====== //
    textArray = text.split("");

    // ====== Create an array that stores the characters wrapped in span tags ====== //
    var resultsArray = [];

    // ====== Create an array of colors to be used in main loop ====== //
    var color = ["red","orange","yellow","green","blue","indigo","violet"];
    var counter = 0;

    // ====== Loop thrugh each element in text array, apply span tag to each elem ====== //
    for (var i = 0; i < textArray.length; i++){

      if (counter === (color.length )){
        counter = 0;
      }
      resultsArray.push('<span style="color:' + color[counter] + '">'+textArray[i]+'</span>');
      counter += 1;

    }

    // ====== Create result string and update the element's inner HTML ====== //
    var resultsString = resultsArray.join('');
    this[0].innerHTML = resultsString;
  };
})(jQuery);
