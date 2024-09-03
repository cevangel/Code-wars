// //**prompt
//sentence-smash
// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'


//**My solution 
function xor(a, b) {
  if ((a == false) && (b == false)) return false;
  if ((a == true) && (b == false)) return true;
  if ((a == false) && (b == true)) return true;
  else return false;
} 
//**tests it passed
//see entry


//**other solutions to learn from 
function xor(a, b) {
  return a != b; 
  //if false != false, then returns false
  //if true != true, then returns false (true doesn't not equal true)
  //if true != false, then returns true, because they def don't equal each other 
}

//or

function xor(a, b) {
  return (a || b) && !(a && b);
}