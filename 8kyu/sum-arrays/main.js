//problem:https://www.codewars.com/kata/53dc54212259ed3d4f00071c/javascript
function sum(numbers) {
  return numbers.reduce((sum,currentValue) => sum + currentValue, 0)
}