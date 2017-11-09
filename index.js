// Write your code in this file!
function scuberGreetingForFeet(travelDistance) {
  if (travelDistance <= 400) {
    return 'This one is on me!';
  } else if (travelDistance >= 2000 && travelDistance <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else if (travelDistance > 2500) {
    return 'No can do.';
  }
}

function ternaryCheckCity(destinationCity) {
  return destinationCity === 'NYC' ? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    default:
      return 'Bye.';
      break;
  }
}
