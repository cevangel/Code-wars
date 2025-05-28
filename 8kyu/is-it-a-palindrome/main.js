// from here: https://web.archive.org/web/20210226224607/https://scotch.io/courses/the-ultimate-guide-to-javascript-algorithms/palindromes
function isPalindrome(x) {
  if (x === ""){return true}
  let string = x.toLowerCase();
  for (let i=0; i < string.length/2; i++){
    return string[0] !== string[string.length-1] ? false : true;
  }
//   return x.toLowerCase().split('').reduce((acc, current)=> current + acc, "") === x.toLowerCase()
  // your code here
}