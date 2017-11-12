// Write your code in this file!
function scuberGreetingForFeet(feet)  {
  if (feet < 400) {
    return "This one is on me!"
  }

  if (feet > 2000 && feet < 2500) {
    return "I will gladly take your thirty bucks."
  }

  if (feet > 2500) {
    return "No can do."
  }
}

function ternaryCheckCity(city) {
  let location

  if (city === "NYC") {
    return "Ok, sounds good."
  }

  if (city !== "NYC") {
    return "No go."
  }
}

function switchOnCharmFromTip(tip) {
  let generous

  switch (tip) {
    case 'generous':
      return "Thank you so much."
      break;

      case 'not as generous':
        return "Thank you."
        break;

    default:
        return "Bye."
        break;
  }
}
