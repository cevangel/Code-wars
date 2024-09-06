// //**prompt
//check if number is part of fibo
// You will be given a function, isFibo, which will take three arguments: a, b and f.

// a is the first term of a Fibonacci sequence, b is the second term of this sequence ( it will always be bigger than or equal to a and they'll be both always positive, so don't worry about pesky input checking ) and f is a number which you'll need to check whether or not is a part of this Fibonacci sequence.

// Good luck, muh fellow coding warrior.

//**Unable to get solution
//thought it was this for a while:
function isFibo(a,b,f) {
  return (a + b === f) ? true: false;
}


//**tests it passed
//see entry


//**other solutions to learn 
//https://www.codewars.com/kata/56dc83840a10fee472000ca1/solutions
//very difficult for me, needed to use while loops
//misread problem early
function isFibo(a,b,f) {
  while( a < f ){ [a,b] = [b, a+b] }
  return a==f
}

function isFibo(a,b,f) {
  fibArr = [a,b];
  n = fibArr.length;
  
  //intial check
  if(fibArr.includes(f)){
    return true;
  } else {
      while (fibArr[n-1] < f){
        fibArr.push(fibArr[n-1] + fibArr[n-2]); 
        n++;
        if(fibArr.includes(f)){
          return true;
        }
      }
    return false;  
  }
}
