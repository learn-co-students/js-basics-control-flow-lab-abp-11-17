// Write your code in this file!

function scuberGreetingForFeet(distance){
    if (distance <= 400) {
      return ("This one is on me!")
      }
      if (distance <=2001) {
        return ("I will gladly take your thirty bucks.")
      }
      if (distance >=2501) {
        return ("No can do.")}
}
function ternaryCheckCity(response){
  return response === "NYC" ? "Ok, sounds good." : "No go."
}
// var text;

function switchOnCharmFromTip(tipamount){
  switch (tipamount) {
    case "generous":
    return "Thank you so much."
    break;
    case "not as generous":
    return "Thank you."
    break;
    default:
    return "Bye."
  }
}
