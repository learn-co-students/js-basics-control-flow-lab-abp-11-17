// Write your code in this file!
function scuberGreetingForFeet(distance){
  let greet;
  if (distance<=400){
    greet="This one is on me!";
  } else if (distance<=2500 && distance>2000){
    greet="I will gladly take your thirty bucks.";
  } else {
    greet="No can do.";
  }
  return greet;
}

function ternaryCheckCity(city){
  let response;
  if (city==="NYC"){
    response="Ok, sounds good.";
  } else {
    response="No go.";
  }
  return response;
}

function switchOnCharmFromTip(tip){
  switch(tip){
    case 'generous':
      return 'Thank you so much.';
    break;
    case 'not as generous':
      return 'Thank you.';
    break;
    default:
      return 'Bye.';
  }
}
