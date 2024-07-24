function twoSort(s) {
    //sort alphabetically (case sensitive) based on ASCII values
    let sortedArray = s.sort();
    let firstWordArr = sortedArray[0].split(''); //create array of first value 
    let firstLetter = firstWordArr[0]; 
    for (i = 1; i < firstWordArr.length; i++){ //use loop to add *** to first letter
        firstLetter += "***" + firstWordArr[i];
    }
    return firstLetter; //solution is first letter with rest of letters added by loop

  }

  // **TOP SOLUTION**
//   function twoSort(s) {
//     return s.sort()[0].split('').join('***');
//   } 

//notes: neglected to use join method