//**prompt
// Return the day
//Complete the function which returns the weekday according to the input number:

// 1 returns "Sunday"
// 2 returns "Monday"
// 3 returns "Tuesday"
// 4 returns "Wednesday"
// 5 returns "Thursday"
// 6 returns "Friday"
// 7 returns "Saturday"


//**My solution


// //**tests it passed
// const Test = require('@codewars/test-compat');

// describe( "whatday", function(){
//   it( "should work for the examples" , function(){
//     Test.assertEquals(whatday(1),'Sunday')
//     Test.assertEquals(whatday(2), 'Monday')
//     Test.assertEquals(whatday(3),'Tuesday')
//        Test.assertEquals(whatday(8),  'Wrong, please enter a number between 1 and 7')
//     Test.assertEquals(whatday(20),  'Wrong, please enter a number between 1 and 7')

//       });
// });

//**other solutions to learn from 
function whatday(num) { 
  switch(num) {
    case 1:
      return "Sunday";
    case 2:
      return "Monday";
    case 3:
      return "Tuesday";
    case 4:
      return "Wednesday";
    case 5:
      return "Thursday";
    case 6:
      return "Friday";
    case 7:
      return "Saturday";
    default:
      return 'Wrong, please enter a number between 1 and 7';
  }
}
//'A break only exits the switch-case statement. On the other side a return exits the whole method, so this is valid, too. As you can see, in any case there will be a returned value.'

function whatday(num) { 
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return days[num - 1] || 'Wrong, please enter a number between 1 and 7';
}