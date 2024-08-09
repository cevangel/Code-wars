//prompt
//Be Concise IV - Index of an element in an array
//Task
//Provided is a function Kata which accepts two parameters in the following order: array, element and returns the index of the element if found and "Not found" otherwise. Your task is to shorten the code as much as possible in order to meet the strict character count requirements of the Kata. (no more than 161) You may assume that all array elements are unique.
//solution
function find(a, e) {
  return a.indexOf(e) == -1 ?"Not found":a.indexOf(e);
}
//tests it passed
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Your refactored find() function", () => {
//   it("should behave as expected", () => {
//     function find(array, element) {
//   let i = array.indexOf(element)
//   if (i) return i;
//   return "Not found";
// }
// let array = [2,3,5,7,11];

//     assert.strictEqual(find(array, 5), 2);
//     assert.strictEqual(find(array, 11), 4);
//     assert.strictEqual(find(array, 3), 1);
//     assert.strictEqual(find(array, 2), 0);
//     assert.strictEqual(find(array, 7), 3);
//     assert.strictEqual(find(array, 1), "Not found");
//     assert.strictEqual(find(array, 8), "Not found");
//     array = [true, "Hello World", false, "Lorem Ipsum", 6, Math.PI];
//     assert.strictEqual(find(array, "Hello World"), 1);
//     assert.strictEqual(find(array, "lorem ipsum"), "Not found");
//     assert.strictEqual(find(array, "Lorem Ipsum"), 3);
//     assert.strictEqual(find(array, false), 2);
//     assert.strictEqual(find(array, true), 0);
//     assert.strictEqual(find(array, Math.PI), 5);
//     assert.strictEqual(find(array, 3.14), "Not found");
//     assert.strictEqual(find(array, 6), 4);
//   });
// });
//other solutions to learn from 
//var find = (a, e) => a.includes(e) ? a.indexOf(e) : "Not found";
//or const find = (arr, elem) => arr.indexOf(elem) > -1 ? arr.indexOf(elem) : "Not found"
//const find = (array, el) => array.indexOf(el) < 0 ? "Not found" : array.indexOf(el);
//arrow functions help