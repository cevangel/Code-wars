function strCount(str, letter){  
  var numOfLetter = 0;
  let array = str.split('');
  //  for (i=0; i<array.length;i ++){
  //    if(array[i] === letter)
  //       numOfLetter++;
  var numOfLetter = array.filter(element => element === letter).length;
    return numOfLetter;
    
  }