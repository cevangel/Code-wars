// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

//**My solution 
var min = function(list){
  return list.sort((a,b)=>a-b)[0];
}

var max = function(list){
  return list.sort((a,b)=>b-a)[0];
}


// best one: uses spread operator and math.min/max
const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

//**other solutions to learn from 
// https://www.codewars.com/kata/55edaba99da3a9c84000003b/solutions/javascript