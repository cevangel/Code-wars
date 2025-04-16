// Problem: https://www.codewars.com/kata/563e320cee5dddcf77000158/javascript
function getAverage(marks){
  //TODO : calculate the downward rounded average of the marks array
  return Math.floor((marks.reduce((total, cVal)=>total + cVal, 0))/(marks.length))
}
//Other solutions: https://www.codewars.com/kata/563e320cee5dddcf77000158/solutions/javascript