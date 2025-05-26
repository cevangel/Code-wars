// https://web.archive.org/web/20210315172511mp_/https://scotch.io/courses/the-ultimate-guide-to-javascript-algorithms/sentence-capitalization
function sentenceCapitalization(str) {
  //input a string
  //output the string but every work in the string is capitalized
  //example: the quick brown fox => The Quick Brown Fox
  //turn string into array by split(" ") and lowercase
  //use map to make a new array
  //join that array with " "
  let wordArray = str.split(" ")
  console.log(wordArray)
  let capArray = wordArray.map((word) => {
    return word.slice(0,1).toUpperCase() + word.slice(1);
  })
  console.log(capArray)
  let result = capArray.join(" ");
  console.log(result)
  return result;
  };
  
  
  