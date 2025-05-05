// problem: https://www.codewars.com/kata/576b93db1129fcf2200001e6/solutions/javascript?filter=all&sort=best_practice&invalids=false
function sumArray(array) {
  if (!Array.isArray(array) || array.length <= 2) {
    return 0;
  }

  let sum = array.reduce((accumulator, currentVal) => accumulator + currentVal, 0);
  return sum - Math.min(...array) - Math.max(...array);
}