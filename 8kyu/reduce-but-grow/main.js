//**prompt
//reduce but grow
// Description:
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

//**My solution
function grow(x){
  const initialValue = 1;
  const totalProduct = x.reduce(
    (accumulator, currentValue) => accumulator * currentValue,
    initialValue,
  );
  
  return totalProduct
  }
// //**tests it passed
//see page


//**other solutions to learn from 
const grow=x=> x.reduce((a,b) => a*b);
//initial parameter defaults to 1
//The initial parameter does NOT default to 1... rather, if not specified, it will default to the first value in the array.

// (As per the MDN: 'If initialValue is not specified, previousValue is initialized to the first value in the array, and currentValue is initialized to the second value in the array")

//   So, for this particular problem, if the initial value is not specified, then (a) will be the first value in the array (x) and (b) will be the second value in the array.
  
//   My personal opinion? Always include the 1 if it's multiplication (or a 0 if it's addition, etc.)