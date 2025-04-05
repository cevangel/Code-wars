//https://www.codewars.com/kata/576bb71bbbcf0951d5000044/javascript
function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) return [];
  let negSum = 0
  let posCount = 0
  for (i = 0; i < input.length; i++){
    if(input[i] < 0) {negSum += input[i];
    } 
    else if (input[i] > 0){posCount++;
    } else{ }
  }
  return [posCount, negSum]
}