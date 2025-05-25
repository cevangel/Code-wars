// from here : https://web.archive.org/web/20210919070232/https://scotch.io/courses/the-ultimate-guide-to-javascript-algorithms/finding-the-most-recurring-character
//https://www.codewars.com/kata/57f57061e1c0bbab630000f8/train/javascript
function mostPopularChar(str) {
  let charMap = {}
  let maxCharValue = 0
  let maxChar = ''

  for (let char of str) {
      if (charMap.hasOwnProperty(char)) {
          charMap[char]++
      } else {
          charMap[char] = 1
      }
  }

  for (let char in charMap) {
      if (charMap[char] > maxCharValue) {
          maxCharValue = charMap[char]
          maxChar = char
      }
  }

  return maxChar
}