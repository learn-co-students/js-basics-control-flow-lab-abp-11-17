// Write your code in this file!
function scuberGreetingForFeet(feet) {
  if (feet <= 400) {
    return 'This one is on me!';
  } else if (feet > 2000 && feet <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else if (feet > 2500) {
    return 'No can do.';
  } else {
    return 'I can not accept that currency';
  }
}

function ternaryCheckCity(city) {
  r1 = 'Ok, sounds good.';
  r2 = 'No go.';
  var var01 = (city == 'NYC') ? r1 : r2;
  return var01;
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}
