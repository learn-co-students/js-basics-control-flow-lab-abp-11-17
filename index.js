// Write your code in this file!
function scuberGreetingForFeet(distance) {
  if(distance<=400) {
    return "This one is on me!"
  }
  else if(distance>2000 && distance<2500) {
    return "I will gladly take your thirty bucks."
  }
  else if(distance>2500) {
    return "No can do."
  }
}

function ternaryCheckCity(ternary){
  let test2;
  (ternary === "NYC") ? test2="Ok, sounds good." : test2="No go.";
  return test2;
}

function switchOnCharmFromTip(generosity) {
  switch(generosity) {
    case "generous":
    return "Thank you so much."
    break;
    case "not as generous":
    return "Thank you."
    break;
    default:
    return "Bye."
    break;
  }
}
