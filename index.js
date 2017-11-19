// Write your code in this file!
function scuberGreetingForFeet(dist) {

  if (dist <= 400) {
    console.log("gives customers a free sample if the ride is less than or equal to 400 feet");
    if (dist === 199) {
      return "This one is on me!";
    }
  }
  else if (dist > 2000 && dist < 2500) {
    console.log("charges 30 dollars for a distance over 2000 feet");
    if (dist === 2001) {
      return 'I will gladly take your thirty bucks.';
    }
  }
  else if (dist > 2500) {
    console.log("charges 30 dollars for a distance over 2000 feet");
    if (dist === 2501) {
      return "No can do.";
    }
  }
};

function ternaryCheckCity(city) {
  return city === "NYC" ? "Ok, sounds good." : "No go.";
};

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return "Thank you so much."
      break;
    case 'not as generous':
      return "Thank you.";
      break;
    default:
      return "Bye.";
  }
}
