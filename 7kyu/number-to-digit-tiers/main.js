//**prompt
//number to digit tiers
// Description:
// Create a function that takes a number and returns an array of strings containing the number cut off at each digit.

// Examples
// 420 should return ["4", "42", "420"]
// 2017 should return ["2", "20", "201", "2017"]
// 2010 should return ["2", "20", "201", "2010"]
// 4020 should return ["4", "40", "402", "4020"]
// 80200 should return ["8", "80", "802", "8020", "80200"]
// PS: The input is guaranteed to be an integer in the range [0, 1000000]

//**My solution so far
function createArrayOfTiers(num) {
  let arr = String(num).split('')
  return [arr[0], arr[0]+arr[1], arr[0]+arr[1]+arr[2]] //arr.length=3
//4, 42, 420
let newArr = []
for (let i = 0; i < arr.length; i++){
  newArr.push(arr[i])
}
  
}
//**tests it passedconst Test = require('@codewars/test-compat');

// describe("createArrayOfTiers", function(){
//   it ("should return the correct array for 420", function(){
//       Test.assertDeepEquals(createArrayOfTiers(420), ["4", "42", "420"]);
//   });
//   it ("should return the correct array for 2017", function(){
//       Test.assertDeepEquals(createArrayOfTiers(2017), ["2", "20", "201", "2017"]);
//   });
// });



//**other solutions to learn from 
//closest to my solution, substring(,i+1) method was CRUCIAL
function createArrayOfTiers(num) {
  let a = []
  for (let i = 0; i < String(num).length; i++) {
    a.push(String(num).substring(0,i+1))
  }
  return a
}
