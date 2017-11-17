function scuberGreetingForFeet(string){
  if (string <=400){
    return "This one is on me!";
  }
  else if (string>=2000 && string<=2500) {
    return "I will gladly take your thirty bucks."
  }
  else {
    return "No can do."
  }
}


function ternaryCheckCity(string){
  if("NYC"==string){
    return  "Ok, sounds good.";
  }
  else {
    return "No go.";
  }
}

function switchOnCharmFromTip(string){
  if ("generous"== string){
    return "Thank you so much."
  } else if ("not as generous" == string) {
    return "Thank you."
  } else {
    return "Bye.";
  }
}
