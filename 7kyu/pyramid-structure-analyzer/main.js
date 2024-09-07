// //**prompt
//two-to-one
// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


//**My solution
function longest(s1, s2) {
  let newString = []; //create new array
  let s1s2Sum = s1 + s2;
  s1s2Array = s1s2Sum.split('').sort();
  
  s1s2Array.forEach((item) => {
    if (!newString.includes(item)){
        newString.push(item)
        }
  });

  return newString.sort().join("");
}



//**tests it passed
//see entry


//**other solutions to learn 
//https://www.codewars.com/kata/5656b6906de340bd1b0000ac/solutions/javascript
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')


