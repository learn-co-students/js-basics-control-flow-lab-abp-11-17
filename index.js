// Write your code in this file!

scuberGreetingForFeet(199);


function scuberGreetingForFeet(something){
  console.log(something);
  if(something >=2500){
    return 'No can do.';
  }else
  if(something <= 400){
    return 'This one is on me!';
  }else if (something>=2000) {
    return 'I will gladly take your thirty bucks.';
}
}

function ternaryCheckCity(something){
if(something === "NYC"){
  return "Ok, sounds good."
}else {
  return "No go.";
}
}

function switchOnCharmFromTip(something){
  switch (something) {
    case 'generous':
      return "Thank you so much.";
      break;
    case 'not as generous':
      return "Thank you."
      break;
    default:
    return 'Bye.'
  }
}
