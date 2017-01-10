

(function($){
  $.fn.rainbowText = function(){
    var text = this[0].innerHTML;
    // Convert text string into array //
    textArray = text.split("");
    console.log(text);

    var resultsArray = [];
    var outputText = "";

    color = "red";
    for (var i = 0; i < textArray.length; i++){
      resultsArray.push('<span style="color:' + color + '">'+textArray[i]+'</span>');
    }
    var resultsString = resultsArray.join('');
    this[0].innerHTML = resultsString;
  };
})(jQuery);

$(document).ready(function(){

  $("h1").rainbowText();


});
