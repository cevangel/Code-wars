// https://structy.net/problems/pair-sum
//brute force
// const pairSum = (numbers, targetSum) => { //time: 0(n^2), space: O(constant)
//   for (let i=0; i<=numbers.length; i++){
//     for (let j=i+1; j<=numbers.length; j++){
//       if (numbers[i] + numbers[j] === targetSum){
//         return [i,j]
//       }
//     }
//   }
// };

// module.exports = {
//   pairSum,
// };

const pairSum = (numbers, targetSum) => { //time/space: O(n)
  let previous = {}; // lookup data structure of nums seen and their index
  for (let i=0; i<=numbers.length; i++){
    const num = numbers[i]; 
    const complement = targetSum - num;
    //if complement is in previous, then return  i, previous[complement]
    if (complement in previous) { 
      return [i, previous[complement]];//both give index 
  }
    previous[num] = i; //after if, at end of each loop, add num to prev
  }
};

module.exports = {
  pairSum,
};
