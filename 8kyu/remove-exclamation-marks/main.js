//**prompt
// remove exclamation marks
// Description:
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.


//**My solution
function removeExclamationMarks(str) {
  let restStr = str.replaceAll("!", "");
  return restStr;
}

// //**tests it passed
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Tests", () => {
//   it("test", () => {
//     assert.strictEqual(removeExclamationMarks("Hello World!"), "Hello World");
//   });
// });

//**other solutions to learn from 
function removeExclamationMarks(s) {
  return s.split('!').join('');
}
//or regex solution
function removeExclamationMarks(s) {
  return s.replace(/!/gi, '');
}