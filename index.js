// Write your code in this file!
function scuberGreetingForFeet(distance) {
  if (distance <= 400) {
    return "This one is on me!"
  } else if (distance > 2000 && distance <= 2500 ) {
    return "I will gladly take your thirty bucks."
  } else if (distance > 2500) {
    return "No can do."
  }
}

function ternaryCheckCity(destination) {
  destination === "NYC" ? msg = "Ok, sounds good." :  msg = "No go.";
  return msg;
}

function switchOnCharmFromTip(tip) {
  switch(true) {
    case tip === "generous":
      return "Thank you so much."
    case tip === "not as generous":
      return "Thank you."
    default:
      return "Bye."
  }
}
