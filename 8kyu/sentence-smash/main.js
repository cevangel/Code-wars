// //**prompt
//sentence-smash
// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'


//**My solution 
smash = function (words) {
  return words.join(" ");
};

//**tests it passed
//see entry


//**other solutions to learn from 
const smash = words => words.join(' '); //arrow fxn

//or

function smash (words) {
  "use strict";
  var smashed = '';
  for(var i = 0; i<words.length; i++) {
    smashed += words[i];
    if(i!=words.length-1) {
      smashed += ' ';
    }
  }
  return smashed;
};