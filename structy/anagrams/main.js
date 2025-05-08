// https://structy.net/problems/anagrams

const anagrams = (s1, s2) => { //O(2n+m) time complexity 
  let charMap = {};//create a charMap of s1
  for (let char of s1){ //O(n)
    if (!charMap.hasOwnProperty(char)){
    charMap[char] = 0;
    } charMap[char] += 1;
  }
  for (let char of s2){   //O(m)   //decrement s2 values from s1 via for of loop
    if (!charMap[char]){    //if s2 char not in s1, then return false
      return false
  } else {
      charMap[char]-=1 //you can't substract a string s2[char]
  }
  } //unexpected end of input error before
  for (let char in charMap){ //O(n) //for IN loop for objects
    if (charMap[char] != 0){ //check if 0
      return false
    }
  }
  return true 
};


anagrams("fluster","fluster")
module.exports = {
  anagrams,
};
