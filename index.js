// Write your code in this file!
function scuberGreetingForFeet(num){
  if(num > 2500){
    return 'No can do.';
  }
  else if(num > 400){
    return 'I will gladly take your thirty bucks.';
  }
  else {
    return 'This one is on me!';
  }
}

function ternaryCheckCity(city){
  return city === "NYC" ? "Ok, sounds good." : "No go." ;
}

function switchOnCharmFromTip(tips){
  switch (tips) {
    case "generous":
      return "Thank you so much.";
      break;
    case "not as generous":
      return "Thank you.";
      break;
    default:
      return "Bye."
  }
}
