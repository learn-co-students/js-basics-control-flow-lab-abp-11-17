// Write your code in this file!
function scuberGreetingForFeet(distance){
  if (distance <= 400){
    return('This one is on me!');
  } else if (distance > 2000 && distance <= 2500){
    return('I will gladly take your thirty bucks.');
  } else if (distance > 2500){
    return('No can do.');
  }
}

function ternaryCheckCity(city){
  let answer = city === 'NYC' ? "Ok, sounds good.":"No go.";
  return answer;
}

function switchOnCharmFromTip(tip){

let answerTip;

  switch (tip) {
    case 'generous':
      answerTip = 'Thank you so much.';
      break;
    case 'not as generous':
      answerTip = 'Thank you.';
      break;
    default:
      answerTip = 'Bye.';
  }

return answerTip;
}
