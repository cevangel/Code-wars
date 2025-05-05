//https://www.codewars.com/kata/60bdeb03be45db0006ba6dd8/train/javascript
//https://web.archive.org/web/20220104180334/https://scotch.io/courses/the-ultimate-guide-to-javascript-algorithms/finding-the-longest-word-in-a-sentence
function findLongestWordLength(str) {
  let longest = str.split(" ").reduce((maxLength, current) => {
    return current.length > maxLength.length ? current : maxLength
  },""
   )
   return longest.length;
 }