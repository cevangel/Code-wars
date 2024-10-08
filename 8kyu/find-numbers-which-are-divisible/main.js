// //**prompt
// Find numbers which are divisible by given number
// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

// Example(Input1, Input2 --> Output)
// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]


//**My solution 
function divisibleBy(numbers, divisor){
  return numbers.filter((number) => number%divisor === 0);
}
//**tests it passed
//see entry


//**other solutions to learn from 
// https://www.codewars.com/kata/55edaba99da3a9c84000003b/solutions/javascript