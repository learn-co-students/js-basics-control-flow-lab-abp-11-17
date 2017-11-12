// Write your code in this file!
function scuberGreetingForFeet(rideLength){
  switch(true) {
    case rideLength<=400:
        return 'This one is on me!'

    case rideLength>2500:
        return 'No can do.'
    case rideLength>2000:
      return 'I will gladly take your thirty bucks.'
    default:
        return "?"
      }
}
//result = x > y ? "good job" : 20;
function ternaryCheckCity(city) {
  return city==='NYC' ? 'Ok, sounds good.': 'No go.';
}
function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.'
      break;
    case 'not as generous':
      return 'Thank you.'
      break;
    default:
      return "Bye."

  }

}
