//**prompt
// Description:

// Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that
// References

// http://www.catster.com/cats-101/calculate-cat-age-in-cat-years
// http://www.slate.com/articles/news_and_politics/explainer/2009/05/a_dogs_life.html
// If you liked this Kata there is another related one here

//**My solution
var humanYearsCatYearsDogYears = function(humanYears) {
   if (humanYears === 1){   //minimum 1 human year = 15 cat and 15 dog years
    catYears = 15;
    dogYears = 15;
  } else if (humanYears === 2){   //if two years, 2 human, 24 cat, 24 dog
    catYears = 24;
    dogYears = 24;
  } else {        //if >= 3, then human -2, 24+humanYears*4 = cat, 24+humanYears*5
    catYears = 24 + (humanYears-2)*4;
    dogYears = 24 + (humanYears-2)*5;
  }
  return [humanYears, catYears, dogYears];
}
// //**tests it passed
// const Test = require('@codewars/test-compat');

// describe("Example Tests", function() {

//   it("one", function() {
//     Test.assertSimilar(humanYearsCatYearsDogYears(1), [1,15,15]);
//   });

//   it("two", function() {
//     Test.assertSimilar(humanYearsCatYearsDogYears(2), [2,24,24]);
//   });

//   it("ten", function() {
//     Test.assertSimilar(humanYearsCatYearsDogYears(10), [10,56,64]);
//   });

// });


//**other solutions to learn from 
var humanYearsCatYearsDogYears = function(y) { //shortened terms, less curly brackets
  if (y == 1) return [1, 15, 15]
  if (y == 2) return [2, 24, 24]
  return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]
}

//more spelled out solution
const humanYearsCatYearsDogYears = (humanYears) => {
  let catYears = 0;
  let dogYears = 0;
  
  for (let i = 1; i <= humanYears; i++) {
    if (i === 1) {
      catYears += 15;
      dogYears += 15;
    }
    else if (i === 2) {
      catYears += 9;
      dogYears += 9;
    }
    else {
      catYears += 4;
      dogYears += 5;
    }
  }
  return [humanYears,catYears,dogYears];
}

//switch statement
function humanYearsCatYearsDogYears(humanYears) {
  switch (humanYears) {
    case 1:
      return [1, 15, 15]
    case 2:
      return [2, 24, 24];
    default:
      return [humanYears, (humanYears - 2) * 4 + 24, (humanYears - 2) * 5 + 24 ];
  }
  
}