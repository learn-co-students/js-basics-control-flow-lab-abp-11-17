// Write your code in this file!
function scuberGreetingForFeet(ride) {
  if (ride <= 400) {
    return 'This one is on me!';
  }
  else if (2000<ride && ride< 2500) {
    return 'I will gladly take your thirty bucks.';
  }
  else if (ride >=2501) {
    return 'No can do.';
  }
}

function ternaryCheckCity(city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.' ;
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return "Thank you so much." ;
      break;
    case 'not as generous':
        return 'Thank you.' ;
      break;
      default:
      return "Bye." ;
  }
}
