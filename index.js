// Write your code in this file!

function scuberGreetingForFeet(lengthOfRideInFeet){
    if(lengthOfRideInFeet <= 400){
      return "This one is on me!";
    }
  if(lengthOfRideInFeet > 2000 && lengthOfRideInFeet < 2500){
    return "I will gladly take your thirty bucks.";
  }
  if(lengthOfRideInFeet > 2500){
    return "No can do.";
  }
}

function ternaryCheckCity(someString){
  return someString === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(charm){
  switch(charm){
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    case 'thanks for everything':
      return 'Bye.';
      break;
  }
}
