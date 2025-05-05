/*
Return the lowest index at which a value (second argument) should be
inserted into an array (first argument) once it has been sorted. The
returned value should be a number. E.g

whereIBelong([1,2,3,4], 1.5) // should return 1 because it is greater
than 1(index 0), but less than 2(index 1).
*/



// function whereIBelong(arr, num) {
//    // Code goes here
//    let smallerThanNumCount = 0; //initialize count
//    for (let ele of arr){ //for of loop to see many arr elements are less than num (will be the index where it belongs)
//       if (ele < num){ 
//          smallerThanNumCount++
//       }
//    }
//    return smallerThanNumCount;

// }

const longestWord = (sentence) => {
  let sentenceArray = sentence.split(" ");
  let longest = '';
  for (let word of sentenceArray){
    if (word.length >= longest.length){
      longest = word
    }
  }
  return longest;
};


module.exports = whereIBelong