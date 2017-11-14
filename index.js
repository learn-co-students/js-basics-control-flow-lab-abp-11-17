// Write your code in this file!
function scuberGreetingForFeet(number) {
  if(number <= 400){
    return "This one is on me!"
  } else if (number > 2000){
    if (number > 2500){
      return 'No can do.'
    }
    return 'I will gladly take your thirty bucks.'
  }
}

function ternaryCheckCity(string){
  if(string == "NYC") {
    return "Ok, sounds good."
  } else {
    return "No go."
  }
}

function switchOnCharmFromTip(string){
  switch(string) {
    case "generous":
      return "Thank you so much."
    case "not as generous":
      return "Thank you."
    default:
      return "Bye."
  }
}
