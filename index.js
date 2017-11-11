function scuberGreetingForFeet(x){
  if (x < 400){
    return ("This one is on me!")
  } else if (x>2500) {
    return ("No can do.")
  } else {
    return ("I will gladly take your thirty bucks.")
  }
}

function ternaryCheckCity(y){
  x=(y===('NYC')) ? "Ok, sounds good." : "No go."
  return x
}

function switchOnCharmFromTip(type){
  switch (type) {
    case 'generous':
      return "Thank you so much."
    case 'not as generous':
      return "Thank you."
    default:
      return "Bye."

  }
}
