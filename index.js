// Write your code in this file!

function scuberGreetingForFeet (distance) {
  if (distance < 400) {
    return ("This one is on me!")
  }
  else if (distance > 2500) {
    return ("No can do.")
  }
  else if (distance > 2000) {
    return ("I will gladly take your thirty bucks.")
  }
}

function ternaryCheckCity (city) {
  if (city === "NYC"){
    return ("Ok, sounds good.")
  }
  else if (city != "NYC"){
    return ("No go.")
  }
}

function switchOnCharmFromTip (tipStatus) {
  if (tipStatus === 'generous') {
    return ("Thank you so much.")
  }
  else if (tipStatus === 'not as generous') {
    return ("Thank you.")
  }
  else {
    return ("Bye.")
  }
}
