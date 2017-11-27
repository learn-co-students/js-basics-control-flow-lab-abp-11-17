// Write your code in this file!
function scuberGreetingForFeet(number){
  if (number <= 400) {
    return 'This one is on me!'
  } else if (number >= 2000 && (number < 2501)){
    return 'I will gladly take your thirty bucks.'
  } else if ( number <= 2501){
    return 'No can do.'
  }
}

function ternaryCheckCity(city){
  if (city === "NYC"){
    return "Ok, sounds good."
  } else {
    return "No go."
  }
}

function switchOnCharmFromTip(tipString){
  if (tipString === "generous"){
  return "Thank you so much."
} else if (tipString === "not as generous"){
  return "Thank you."
} else if (tipString === "thanks for everything"){
  return "Bye."
  }
}
