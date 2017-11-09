// Write your code in this file!
function scuberGreetingForFeet (start){

  if (start < 400){
    return "This one is on me!";
  }else if (start > 2000 && start <2500){
      return 'I will gladly take your thirty bucks.';
    }else if (start > 2500){

        return 'No can do.';

    }
  };

  function ternaryCheckCity(city){



  return  city === 'NYC' ? 'Ok, sounds good.' :'No go.';


  }


  function switchOnCharmFromTip(amount){
      switch(amount){
        case 'generous':
        return 'Thank you so much.';


        case 'not as generous':
        return 'Thank you.';

        default: return 'Bye.';

      }
}
