//**prompt

// Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string
// Description:
// Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string.
// For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

//**My solution
function remove(string) {
  return string.replaceAll('!', '') + '!';
}

// //**tests it passed
// const strictEqual = require("chai").assert.strictEqual;

// function doTest (input, expected) {
// 	const actual = remove(input);
// 	strictEqual(actual, expected, `for string:\n"${input}"\n`);
// }

// describe("Tests suite", function () {
// 	it("sample tests", function () {
// 		doTest("Hi!", "Hi!");
// 		doTest("Hi!!!", "Hi!");
// 		doTest("!Hi", "Hi!");
// 		doTest("!Hi!", "Hi!");
// 		doTest("Hi! Hi!", "Hi Hi!");
// 		doTest("Hi", "Hi!");
// 	});
// });



//**other solutions to learn from 
//https://www.codewars.com/kata/reviews/57faf1525dfe7c65390000c4/groups/57fc3e03dff6dfd679000571
// const remove = s => s.replace(/!+/g, "")+"!";