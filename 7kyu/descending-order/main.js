//**prompt
//descending order
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

//**My solution
function descendingOrder(n){
  let sortedArr = (String(n).split('')).sort( (a, b) => b - a ); //create arr from (String(n).split('')) then sorted
  return Number(sortedArr.join('')) //sortedArray joined as number and turned into Number
}
//**tests it passed
// const { assert } = require("chai")

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(descendingOrder(0), 0)
//     assert.strictEqual(descendingOrder(1), 1)
//     assert.strictEqual(descendingOrder(111), 111)
//     assert.strictEqual(descendingOrder(15), 51)
//     assert.strictEqual(descendingOrder(1021), 2110)
//     assert.strictEqual(descendingOrder(123456789), 987654321)
//     })
//   })



//**other solutions to learn from 
function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}
//or use + operator to turn into number
function descendingOrder(n){
  return parseInt(n.toString().split('').sort().reverse().join(''), 10);
}