// Write your code in this file!
function scuberGreetingForFeet (distance) {
  switch (true) {
    case (distance <= 400): return 'This one is on me!';
    case (distance > 2500): return 'No can do.';
    case (distance > 2000): return 'I will gladly take your thirty bucks.';
  } // end switch
}

function ternaryCheckCity (city) {
  const response = ['Ok, sounds good.', 'No go.'];
  return city === 'NYC' ? response[0] : response[1];
}

function switchOnCharmFromTip (tip) {
  switch (tip) {
    case 'generous': return 'Thank you so much.';
    case 'not as generous': return 'Thank you.';
    case 'thanks for everything': return 'Bye.';
  }
}
