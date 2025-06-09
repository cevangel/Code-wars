// https://www.codewars.com/kata/5899642f6e1b25935d000161/solutions/javascript
// https://web.archive.org/web/20211205091743/https://scotch.io/courses/the-ultimate-guide-to-javascript-algorithms/combining-arrays-without-duplicates#toc-using-filter-
function mergeArrays(arr1, arr2) {
  let jointArray = arr1.concat(arr2)
  let result = jointArray.filter((item,index)=> jointArray.indexOf(item) === index)
  return result.sort((a,b)=> a-b)
//     const uniqueArray = jointArray.filter((item,index) => jointArray.indexOf(item) === index)
//     return uniqueArray
}
  //declare jt array 
  //get each of the arrays
