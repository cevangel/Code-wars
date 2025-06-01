// https://web.archive.org/web/20211119122648/https://scotch.io/courses/the-ultimate-guide-to-javascript-algorithms/search-and-replace
function searchReplace(str, word, replace){
  //use conditional to match if capitilzed ()
  if (word[0] === word[0].toUpperCase()){ //if 1st letter of word upper, 
    replace = replace[0].toUpperCase() + replace.slice(1);
  }
  console.log(word, replace)
  return str.replace(word, replace)
  }