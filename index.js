// Write your code in this file!
function scuberGreetingForFeet(feet) {
  if (feet<=400) {
    return "This one is on me!";
  } else if (1999 < feet && feet < 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
  return "No can do.";
  }
}

function ternaryCheckCity(str){
  if (str === 'NYC') {
    return 'Ok, sounds good.'
  } else {
    return 'No go.';
  }
}

function switchOnCharmFromTip(str){
  if (str === 'generous') {
    return 'Thank you so much.'
  } else if (str === 'not as generous') {
    return 'Thank you.'
  } else {
    return 'Bye.';
  }
}

/*
function switchOnCharmFromTip (tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}
*/
