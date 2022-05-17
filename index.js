function scuberGreetingForFeet(scuberFees){
  // Write your code here!
  const sample = 'This one is on me!';
  const tier1 = 'That will be twenty bucks.';
  const tier2 = 'I will gladly take your thirty bucks.';
  const limit = 'No can do.';

  if(scuberFees <= 400) {
    return sample;
  } else if(scuberFees > 400 && scuberFees < 2000) {
    return tier1;
  } else if(scuberFees > 2000 && scuberFees < 2500) {
    return tier2;
  } else if(scuberFees > 2500) {
    return limit;
  }
}
scuberGreetingForFeet(199);
scuberGreetingForFeet(1500);
scuberGreetingForFeet(2001);
scuberGreetingForFeet(2501);

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

function ternaryCheckCity(city){
  // Write your code here!
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.'
}

ternaryCheckCity('NYC');
ternaryCheckCity('Pittsburgh');

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip) {
    case 'generous':
      return 'Thank you so much.'
      break;
    case 'not as generous':
      return 'Thank you.'
      break;
    default:
      return 'Bye.'
      break;
  }
}

switchOnCharmFromTip('generous');
switchOnCharmFromTip('not as generous');
switchOnCharmFromTip('thanks for everything');