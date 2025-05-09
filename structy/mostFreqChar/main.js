// https://structy.net/problems/most-frequent-char
const mostFrequentChar = (s) => { //space/time complexity: O (2n)
  let count = {};
  for (let char of s){//1. count object: hash map keep count of # of each char (for of)
    if (!count[char]){
      count[char] = 0;      
    } count[char]++
  }
  let mostFreqChar = null; //store char not num
  for (let char in count){ //for in bc object
    if (mostFreqChar === null || count[char] > count[mostFreqChar]){
      mostFreqChar = char;
    }
  }
  return mostFreqChar;

};

module.exports = {
  mostFrequentChar,
};
