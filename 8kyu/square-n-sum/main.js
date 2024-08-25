//**prompt
//square-n-sum
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 
// 1
// 2
// +
// 2
// 2
// +
// 2
// 2
// =
// 9
// 1 
// 2
//  +2 
// 2
//  +2 
// 2
//  =9.


//**My solution

//idk why this first attempt failed, returned undefined
function squareSum(numbers){
  //square each number in an array
  //sum the results aka reduce
  let squaredArr = numbers.map(num => num*num);
  
  let total = squaredArr.reduce(function(sum, num) {
    sum + num;
  }, 0);
  return total;
  }

//ACTUAL SOLUTION I SUBMITTED
function squareSum(numbers){
  //square each number in an array
  //sum the results aka reduce
  let squaredArr = numbers.map(num => num*num);
  
  let total = squaredArr.reduce(
    (sum, currentValue) => sum + currentValue,
    0,
  );
  return total;
  }
// //**tests it passed
//see page


//**other solutions to learn from 
//went straight to reduce
function squareSum(numbers){
  return numbers.reduce(function(sum, n){
    return (n*n) + sum;
  }, 0)
}
//or
function squareSum(numbers){
  return numbers.reduce((sum,num) => sum + (num * num), 0);
}