// Write your code in this file!
function scuberGreetingForFeet(distance){
  if(distance > 2500){
    return 'No can do.';
  }else if(distance < 400){
    return 'This one is on me!';
  } else if(distance > 2000){
    return 'I will gladly take your thirty bucks.';
  }
}

function ternaryCheckCity(destination){
  let ok ='Ok, sounds good.';
  let no = 'No go.';
  let answer  =  (destination == 'NYC' ? ok : no );
  return answer;
}

function switchOnCharmFromTip(x){
  switch (x) {
    case 'generous':
      return 'Thank you so much.';

    case 'not as generous':
      return 'Thank you.';

    case'thanks for everything':
      return 'Bye.';
    }
}
