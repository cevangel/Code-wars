// https://structy.net/problems/fizz-buzz
const fizzBuzz = (n) => {
  let result = [];  //create an empty result array
  for (let i=1; i<= n; i++){//create a for loop
    if (i % 15 === 0){ //write conditionals
      result.push("fizzbuzz")
    } else if (i % 5 === 0){
      result.push("buzz")
    } else if (i % 3 === 0){
      result.push("fizz")
    } else {
      result.push(i)
    }
  }
  return result;
};
