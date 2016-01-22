var pingPonging = function(number){
  if ((number % 3 === 0) && (number % 5 === 0)){
    return "PingPong";
  } else if (number % 5 === 0){
    return "Pong";
  } else if (number % 3 === 0){
    return "Ping";
  }

}
