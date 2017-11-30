// Write your code in this file!
let txt='hi';
function scuberGreetingForFeet(dist)
{
  if(dist <=400)
  {
    txt='This one is on me!';
  }
  else if(dist>2000 && dist <=2500)
  {
    txt='I will gladly take your thirty bucks.';
  }
  else
  {
    txt='No can do.';
  }
  return txt;
};
function ternaryCheckCity(destn)
{
  txt= destn==='NYC' ? 'Ok, sounds good.' : 'No go.';
  return txt;
};
function switchOnCharmFromTip(tip)
{
  switch (tip)
  {
    case 'generous':
      txt='Thank you so much.';
      break;
    case  'not as generous':
      txt='Thank you.';
      break;
    default :
      txt='Bye.';
      break;
    };
  return txt;
};
