// Write your code in this file!
function scuberGreetingForFeet(feet) {
  let greeting;

  if (feet < 400) {
    greeting = 'This one is on me!';
  } else if (feet > 2500) {
    greeting = 'No can do.';
  } else if (feet > 2000) {
    greeting = 'I will gladly take your thirty bucks.';
  }

  return greeting
}

function ternaryCheckCity(city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(tip) {
  let response;

  switch (true) {
    case tip === 'generous':
      response = "Thank you so much.";
      break
    case tip === 'not as generous':
      response = 'Thank you.';
      break
    default:
      response = 'Bye.';
  }

  return response
}
