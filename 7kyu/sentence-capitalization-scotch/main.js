// https://www.codewars.com/kata/58ac59d21c9e1d7dc5000150/train/javascript
// https://web.archive.org/web/20210919083758/https://scotch.io/courses/the-ultimate-guide-to-javascript-algorithms/array-chunking

function makeParts(arr, chunkSize) {
  let result = []; //declar result arr
  //slice from arr and push to result until no more arr 
  //return result 
  for (let i=0; i<arr.length; i+=chunkSize){
  let chunk =  arr.slice(i, i+chunkSize);
  result.push(chunk);
}
  return result;
}