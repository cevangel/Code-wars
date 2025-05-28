// https://web.archive.org/web/20210226222551/https://scotch.io/courses/the-ultimate-guide-to-javascript-algorithms/hamming-distance
// https://www.codewars.com/kata/5410c0e6a0e736cf5b000e69/javascript
function hamming(a,b) {
  let count = 0
	for(let i = 0; i<=a.length; i++){
    if(a[i] !== b[i] ){
      count++
    }
  }
  return count
}