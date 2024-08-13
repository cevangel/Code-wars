//**prompt
//reverse-words
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

//**My solution
function reverseWords(str) {
  //separate each string by space
  let arr = str.split(' ');
  
  //convert each string to array
  let reversedArr = arr.map(function(item, index) {
      return item.split('').reverse().join('');
  });

  return reversedArr.join(' ');
  // //for each item in array, convert to array via split and reverse/join
  // //rejoin string
  // return arr.join(' ');
}

reverseWords('The quick brown fox');

//**tests it passed
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
//     assert.strictEqual(reverseWords('apple'), 'elppa');
//     assert.strictEqual(reverseWords('a b c d'), 'a b c d');
//     assert.strictEqual(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');
//   });
// });



//**other solutions to learn from 
function reverseWords(str) {
  return str.split(' ').map(function(word){
    return word.split('').reverse().join('');
  }).join(' ');
}
//or

function reverseWords(str) {
  // Go for it
  //split words into seperate arrays
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}