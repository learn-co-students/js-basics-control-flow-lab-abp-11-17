// Write your code in this file!
function scuberGreetingForFeet(number){
  if (number < 400) {
    return 'This one is on me!'
  } else if (number > 2000 && number < 2500) {
    return 'I will gladly take your thirty bucks.'
  } else if (number > 2500) {
    return 'No can do.'
  }
}
scuberGreetingForFeet(2501);

function ternaryCheckCity(city){
  if (city === 'NYC') {
    return 'Ok, sounds good.'
  }else {
    return 'No go.'
  }
}
ternaryCheckCity('NYC');


function switchOnCharmFromTip(response){


  switch (response) {
    case 'generous':
      return 'Thank you so much.'
    break;
    case 'not as generous':
      return 'Thank you.'
    break;
    case  'thanks for everything':
      return 'Bye.'

  }
}
switchOnCharmFromTip('generous');
