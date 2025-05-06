// https://structy.net/problems/pairs
const pairs = (elements) => {
  let result = [];
  for (let i = 0; i < elements.length; i++){// use nested for loop
    for (let j = i+1; j < elements.length; j++){
      const pair = [elements[i], elements[j]]
      result.push(pair)
    }
  }
  return result;
};