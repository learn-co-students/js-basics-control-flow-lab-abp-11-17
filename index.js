// Write your code in this file!
function scuberGreetingForFeet(totalDistance) {
  if (totalDistance <= 400) {
    return 'This one is on me!'
  }
  else if (totalDistance > 2000 && totalDistance <=2500) {
    return 'I will gladly take your thirty bucks.'
  }
  else {
    return 'No can do.'
  }
}

function ternaryCheckCity(city) {
return city == 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(amount) {
  switch (amount) {
    case 'generous' :
      return 'Thank you so much.';
    case 'not as generous' :
      return 'Thank you.';
    case 'thanks for everything' :
      return 'Bye.';
  }
}
