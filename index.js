// Write your code in this file!
function scuberGreetingForFeet(distance) {
  if (distance <= 400) {
    return 'This one is on me!';
  }
  else if (distance > 2000 && distance < 2500) {
    return 'I will gladly take your thirty bucks.';
  }
  else {
    return 'No can do.';
  }
}

function ternaryCheckCity(city) {
  return (city === 'NYC') ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip) {
  return (tip === 'generous') ? 'Thank you so much.' : (tip === 'not as generous') ? 'Thank you.' : 'Bye.';
}
