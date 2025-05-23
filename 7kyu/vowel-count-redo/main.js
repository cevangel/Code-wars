function getCount(str) {
  let matchingVowels = str.match(/[aeiou]/gi) //use regex to get length of all gi (global instances of vowel matches, store into variable)
  return matchingVowels ? matchingVowels.length : 0; //return length of variable , else, 0 
  }