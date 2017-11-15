function scuberGreetingForFeet(distance){
  if (distance <=400) {
    return 'This one is on me!';
  }
  else if (distance <=2001) {
    return'I will gladly take your thirty bucks.';
  }
  else if (distance >2500){
    return 'No can do.'
  }
}

function ternaryCheckCity(destination){
  if (destination == 'NYC') {
    return 'Ok, sounds good.'
  }
  else{
    return 'No go.'
  }
}

function switchOnCharmFromTip(amount){
  if (amount == 'generous'){
    return 'Thank you so much.'
  }
  else if (amount == 'not as generous') {
    return 'Thank you.'
  }
  else{
    return 'Bye.'
  }
}
