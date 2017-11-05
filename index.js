function scuberGreetingForFeet(feet) {
  if (feet <= 400) {
    return 'This one is on me!';
  } else if (feet >= 2000) {
    if (feet >= 2501) {
      return 'No can do.';
    } else {
      return 'I will gladly take your thirty bucks.';
    }
  }
}

function ternaryCheckCity(city) {
  return (city === 'NYC') ? 'Ok, sounds good.': 'No go.';
}

function switchOnCharmFromTip(tipQuality) {
  if (tipQuality === 'generous') {
    return 'Thank you so much.';
  } else if (tipQuality === 'not as generous') {
    return 'Thank you.';
  } else if (tipQuality === 'thanks for everything') {
    return 'Bye.';
  }
}
