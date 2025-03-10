function findSmallestInt(arr) {
  let orderedArr = arr.sort((a, b) => a - b);
  return orderedArr[0];
}