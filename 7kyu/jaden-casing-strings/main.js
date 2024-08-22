// //**prompt
//jaden casing strings
// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

//**My solution so far
String.prototype.toJadenCase = function () {
  //turn string into an array
let capitalizedArr = this.split(' ').map(function(word) {
  return word.charAt(0).toUpperCase() + word.slice(1)
});
return capitalizedArr.join(" ");
};

//**tests it passed
//see entry




//**other solutions to learn from 
String.prototype.toJadenCase = function() {
  return this.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
};

// HIGH LEVEL SUMMARY

// To capitalize every first letter of each word in the string.

// this.split(' ') to create an array of individual words
// .map(item => item[0].toUpperCase()) to create a new array with the results from applying the function on every element in the previous array.
// item.slice(1) concatenates back the remainder portion starting at index 1, aka the second letter of each word.
// .join(' ') to combine every element in the array back into a string with a space ' ' in between.
// FULL EXPLANATION: https://codepen.io/iVuDang/pen/abZWGmW?editors=1112