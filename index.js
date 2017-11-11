// Write your code in this file!
let number;
function scuberGreetingForFeet(number) {
  if (number <= 400)
   return "This one is on me!";
  else if (number >= 2000 && number <= 2500)
    return 'I will gladly take your thirty bucks.';
  else if (number > 2500)
    return 'No can do.';
};

let city;
function ternaryCheckCity(city) {
return city === "NYC" ? "Ok, sounds good." : "No go.";
};

let tip;
let answer;
function switchOnCharmFromTip(tip) {
  switch (tip) {
    case "generous":
      return answer = "Thank you so much.";
    case "not as generous":
      return answer = "Thank you.";
    default:
    return answer = "Bye."

  }



};
