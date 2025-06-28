//structy problem: check if number is prime or not;
const isPrime = (n) => {
  if (n === 1){
    return false;
  }
  for (let i=2; i <= Math.sqrt(n); i++){
    if (n%i === 0){
      return false
    }
  }
  return true;  //output true or false if prime or not
};

module.exports = {
  isPrime,
};
