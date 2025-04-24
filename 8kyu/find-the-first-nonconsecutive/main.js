// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/solutions/javascript
function firstNonConsecutive (arr) {
  if (arr.length <=1){return null}
  for(i=1;i<arr.length;i++){
    if(arr[i] !== arr[i-1]+1)
      return arr[i]
  }
  return null
}