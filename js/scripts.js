var pingPonging = function(number){
  if ((number % 3 === 0) && (number % 5 === 0)){
    return "PingPong";
  } else if (number % 5 === 0){
    return "Pong";
  } else if (number % 3 === 0){
    return "Ping";
  } else {
    return number;
  }
}

$(document).ready(function(){
  $("form#pingPongForm").submit(function(event){
    var userInput = parseInt($("input#userInput").val())

    if ($("#numbersList").is(":empty")){
      for(i = 1; i <= userInput; i++){
        $("#numbersList").append("<li>" + pingPonging(i) + "</li>");
      }
      event.preventDefault();
    }
    else {
      $("#numbersList").text("")
      for(i = 1; i <= userInput; i++){
      $("#numbersList").append("<li>" + pingPonging(i) + "</li>");
      }
    }
    event.preventDefault();
  });
});
