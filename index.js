// Write your code in this file!
function scuberGreetingForFeet(x) {
  if (x<=400){ return "This one is on me!"}
  else if (x>=2000 && x<=2500) {return "I will gladly take your thirty bucks."}
  else if (x>2500) {return "No can do."}
}

function ternaryCheckCity(x) {
return (x === `NYC`) ? "Ok, sounds good." : `No go.`;
}

function switchOnCharmFromTip(Tip) {
switch (Tip) {
  case 'generous' :
  return "Thank you so much."
  break;

  case 'not as generous' :
  return "Thank you."
  break;

  default :
  return "Bye."
  break;
}


}
